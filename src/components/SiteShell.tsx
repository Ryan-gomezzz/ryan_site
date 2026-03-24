"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "@/components/About";
import Competitions from "@/components/Competitions";
import Contact from "@/components/Contact";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import JourneyProgress from "@/components/JourneyProgress";
import TechLogoWall from "@/components/TechLogoWall";
import Leadership from "@/components/Leadership";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Projects from "@/components/Projects";
import Recruiter from "@/components/Recruiter";
import Skills from "@/components/Skills";

export default function SiteShell() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="relative overflow-x-clip">
      <LoadingScreen show={loading} />
      <ParticleBackground />
      <JourneyProgress />
      <Navbar />
      <motion.main
        className="pb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={loading ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero />
        <ImpactStrip />
        <TechLogoWall />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Competitions />
        <CurrentlyBuilding />
        <Recruiter />
        <Leadership />
        <Contact />
      </motion.main>
    </div>
  );
}
