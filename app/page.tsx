"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { RefObject, useRef } from "react";

const Home = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experiencesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (!ref.current) return;
    const y = ref.current.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavSelect = (href: string) => {
    const key = href.replace("#", "");
    const sectionRefs: Record<string, RefObject<HTMLElement>> = {
      about: aboutRef,
      projects: projectsRef,
      experiences: experiencesRef,
      contact: contactRef,
    };

    const targetRef = sectionRefs[key];
    if (targetRef) {
      scrollToSection(targetRef);
    }
  };
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} onSelect={handleNavSelect} />
        <Hero />
        <Grid />
        <section ref={projectsRef}>
          <RecentProjects />
        </section>
        <section ref={experiencesRef}>
          <Clients />
        </section>
        <section ref={aboutRef}>
          <Experience />
        </section>
        <Approach />
        <section ref={contactRef}>
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
