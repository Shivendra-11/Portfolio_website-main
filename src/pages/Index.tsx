import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Shivendra Keshari | Full-Stack Developer & B.Tech CSE Student</title>
        <meta
          name="description"
          content="Shivendra Keshari is a full-stack developer and B.Tech CSE student specializing in React, Node.js, Next.js, and modern web technologies. View my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Shivendra Keshari, Full-Stack Developer, Web Developer, React Developer, Node.js, Next.js, Portfolio, B.Tech CSE"
        />
        <meta name="author" content="Shivendra Keshari" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Shivendra Keshari | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Passionate full-stack developer crafting exceptional digital experiences with modern technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shivendra Keshari | Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="Passionate full-stack developer crafting exceptional digital experiences with modern technologies."
        />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shivendra Keshari",
            jobTitle: "Full-Stack Developer",
            url: "#",
            sameAs: [
              "https://github.com/Shivendra-11",
              "https://www.linkedin.com/in/shivendra-keshari-46aa67256/"
            ],
            knowsAbout: ["Web Development", "React", "Node.js", "Next.js", "TypeScript", "MongoDB", "Redis"],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;