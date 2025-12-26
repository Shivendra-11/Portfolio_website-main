import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import BubbleBackground from "@/components/effects/BubbleBackground";

const HomePage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Shivendra Keshari | Full-Stack Developer</title>
        <meta
          name="description"
          content="Shivendra Keshari - Full-Stack Developer & B.Tech CSE Student at KIET, Ghaziabad. Building scalable web apps with React, Node.js, Next.js, and modern tooling."
        />
        <meta property="og:title" content="Shivendra Keshari | Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer & B.Tech CSE Student. Building scalable web applications with modern technologies." />
        <meta property="og:type" content="website" />
      </Helmet>

      <BubbleBackground />
      <HeroSection />
    </PageTransition>
  );
};

export default HomePage;