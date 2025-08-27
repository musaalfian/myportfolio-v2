'use client';

import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { useEffect, useState } from 'react';

export default function Home() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [activeSection, setActiveSection] = useState<string>('');

   // Scroll spy with intersect observer
   useEffect(() => {
      const sectionIds = ['home', 'services', 'experience', 'projects', 'contact'];
      const sections = sectionIds
         .map((id) => document.getElementById(id))
         .filter((el): el is HTMLElement => el !== null);

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setActiveSection(`#${entry.target.id}`);
               }
            });
         },
         { threshold: 0.6 }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
   }, []);

   const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
         setActiveSection(href);
         element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
   };

   return (
      <main className='min-h-screen'>
         <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
         />
         <HeroSection scrollToSection={scrollToSection} />
         <ServicesSection />
         <ExperienceSection />
         <ProjectsSection />
         <CTASection />
         <Footer />
      </main>
   );
}
