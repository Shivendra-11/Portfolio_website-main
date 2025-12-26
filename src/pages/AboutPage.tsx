import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/layout/PageTransition";
import BubbleBackground from "@/components/effects/BubbleBackground";
import { GraduationCap, Target, Code2, Users, MapPin, Mail, Phone } from "lucide-react";

const timeline = [
  {
    year: "2022 – 2026",
    title: "B.Tech in Computer Science",
    subtitle: "KIET Group of Institutions, Ghaziabad",
    description: "Currently pursuing B.Tech (CGPA: 8.25/10). Focus on software engineering, web development, and problem solving.",
    icon: GraduationCap,
  },
  {
    year: "Nov 2023 – Feb 2024",
    title: "Frontend Developer Intern",
    subtitle: "School For All (Remote)",
    description: "Built a responsive and accessible React frontend and improved UI consistency and performance (20–25% fewer load-time issues).",
    icon: Code2,
  },
  {
    year: "Sep 2025 – Oct 2025",
    title: "SDE Intern",
    subtitle: "Vitraga Solutions (Remote)",
    description: "Shipped 20+ features, implemented RBAC with Supabase, and improved API responsiveness using Next.js, TypeScript, Express.js, and Redis.",
    icon: Target,
  },
];

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <PageTransition>
      <Helmet>
        <title>About | Shivendra Keshari</title>
        <meta name="description" content="Learn about Shivendra Keshari - B.Tech CSE student at KIET, passionate Full-Stack Developer with experience building modern web applications." />
      </Helmet>

      <BubbleBackground />

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute left-0 top-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />
        <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg glass-card text-sm text-primary font-mono mb-4">
                <Users className="w-4 h-4" />
                ./about
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                ABOUT <span className="gradient-text">ME</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A passionate developer on a mission to build impactful digital solutions.
              </p>
            </motion.div>

            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl mb-12 border-l-4 border-l-primary"
            >
              <h2 className="text-2xl font-bold font-display mb-4">WHO I AM</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm <span className="text-primary font-semibold">Shivendra Keshari</span>, a B.Tech Computer Science student at KIET Group of Institutions, Ghaziabad.
                I build full-stack web applications with React.js, Node.js, Express.js, and modern tooling like Next.js and TypeScript.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I’ve worked as a Frontend Developer Intern and an SDE Intern, focusing on performance, clean UI, and reliable backend utilities.
                I enjoy building products that are easy to use, fast, and maintainable.
              </p>
              
              {/* Contact Info */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Ghaziabad, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a href="mailto:shivendrakeshari11@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors truncate">
                    shivendrakeshari11@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <a href="tel:+916391048681" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 6391048681
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            >
              {[
                { value: "8.25", label: "CGPA" },
                { value: "500+", label: "Users Impacted" },
                { value: "20+", label: "Features Shipped" },
                { value: "30%", label: "Faster APIs" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-colors"
                >
                  <p className="text-3xl font-bold gradient-text font-display">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-mono mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold font-display text-center mb-8">
                EDUCATION & <span className="gradient-text">EXPERIENCE</span>
              </h2>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                      className="relative pl-20"
                    >
                      <div className="absolute left-4 top-0 w-8 h-8 rounded-lg bg-background border-2 border-primary flex items-center justify-center neon-glow">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>

                      <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
                        <span className="text-sm font-mono text-primary">{item.year}</span>
                        <h3 className="text-xl font-semibold font-display mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.subtitle}</p>
                        <p className="text-muted-foreground text-sm mt-3">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;