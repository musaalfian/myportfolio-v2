'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
   { name: 'Home', href: '#home' },
   { name: 'Layanan', href: '#services' },
   { name: 'Experience', href: '#experience' },
   { name: 'Projects', href: '#projects' },
   { name: 'Contact', href: '#contact' },
];

export function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
   };

   return (
      <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         // className={`fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-300 ${
         //    scrolled ? 'glass-card' : 'bg-transparent'
         // }`}
      >
         <div
            className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
               scrolled ? 'glass-card border-white/50' : 'bg-transparent border-white/25'
            } max-w-xl border rounded-lg mx-auto px-2 sm:px-4 lg:px-6`}
         >
            <div className='flex items-center justify-center h-16'>
               {/* Desktop Navigation */}
               <div className='hidden md:block'>
                  <div className='flex items-baseline space-x-8'>
                     {navItems.map((item) => (
                        <motion.button
                           key={item.name}
                           onClick={() => scrollToSection(item.href)}
                           className='text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors relative group'
                           whileHover={{ y: -2 }}
                        >
                           {item.name}
                        </motion.button>
                     ))}
                  </div>
               </div>

               {/* Mobile menu button */}
               <div className='md:hidden'>
                  <Button
                     variant='ghost'
                     size='sm'
                     onClick={() => setIsOpen(!isOpen)}
                     className='text-foreground hover:text-primary'
                  >
                     {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </Button>
               </div>
            </div>
         </div>

         {/* Mobile Navigation */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className='md:hidden glass-card border-t border-border'
               >
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                     {navItems.map((item) => (
                        <motion.button
                           key={item.name}
                           onClick={() => scrollToSection(item.href)}
                           className='text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors'
                           whileHover={{ x: 10 }}
                        >
                           {item.name}
                        </motion.button>
                     ))}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.nav>
   );
}
