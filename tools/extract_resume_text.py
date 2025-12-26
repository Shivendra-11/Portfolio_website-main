from __future__ import annotations

import json
import re
from pathlib import Path

from pypdf import PdfReader


def normalize_whitespace(s: str) -> str:
    s = s.replace("\u00a0", " ")
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def extract_pdf_text(pdf_path: Path) -> str:
    reader = PdfReader(str(pdf_path))
    parts: list[str] = []
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        text = normalize_whitespace(text)
        if text:
            parts.append(f"--- PAGE {i+1} ---\n{text}")
    return "\n\n".join(parts).strip()


def guess_basic_fields(text: str) -> dict:
    # Heuristics only; user can tweak later.
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]

    # Name: first non-empty line, sans page header.
    name = ""
    for ln in lines[:10]:
        if ln.startswith("--- PAGE"):
            continue
        # Avoid very long lines
        if 2 <= len(ln) <= 80:
            name = ln
            break

    email = ""
    m = re.search(r"([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})", text, re.IGNORECASE)
    if m:
        email = m.group(1)

    phone = ""
    m = re.search(r"(\+?\d[\d \-()]{8,}\d)", text)
    if m:
        phone = m.group(1).strip()

    github = ""
    m = re.search(r"https?://(?:www\.)?github\.com/[^\s)]+", text, re.IGNORECASE)
    if m:
        github = m.group(0).rstrip(".,)")

    linkedin = ""
    m = re.search(r"https?://(?:www\.)?linkedin\.com/[^\s)]+", text, re.IGNORECASE)
    if m:
        linkedin = m.group(0).rstrip(".,)")

    return {
        "name_guess": name,
        "email_guess": email,
        "phone_guess": phone,
        "github_guess": github,
        "linkedin_guess": linkedin,
    }


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    pdf_path = Path(r"C:\Users\HP\OneDrive\Desktop\Shivendra-Resume-Fullstack.pdf")
    out_txt = root / "tools" / "resume.extracted.txt"
    out_json = root / "tools" / "resume.extracted.summary.json"

    text = extract_pdf_text(pdf_path)
    out_txt.write_text(text, encoding="utf-8")

    summary = guess_basic_fields(text)
    summary["pdf"] = str(pdf_path)
    summary["chars"] = len(text)
    summary["out_txt"] = str(out_txt)

    out_json.write_text(json.dumps(summary, indent=2), encoding="utf-8")

    print("Wrote:", out_txt)
    print("Wrote:", out_json)
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
