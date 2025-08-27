'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
   { icon: Github, href: 'https://github.com/musaalfian', label: 'GitHub' },
   { icon: Linkedin, href: 'https://www.linkedin.com/in/musaalfian/', label: 'LinkedIn' },
   { icon: Mail, href: 'mailto:musaganteng071@gmail.com', label: 'Email' },
];

export function Footer() {
   return (
      <footer className='pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50'>
         <div className='max-w-7xl mx-auto'>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className='flex flex-col md:flex-row items-center justify-between border-t gap-4 border-white/20 pt-12'
            >
               <div className='md:mb-0'>
                  <h3 className='mb-2 text-lg font-bold text-white text-center md:texle'>Musa Alfian Maulana</h3>
                  <p className='text-muted-foreground text-sm'>© 2025 Musa. All rights reserved.</p>
               </div>

               <div className='flex space-x-6'>
                  {socialLinks.map((link, index) => (
                     <motion.a
                        key={link.label}
                        href={link.href}
                        target='_blank'
                        className='w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors glow-purple-hover'
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                     >
                        <link.icon className='w-5 h-5' />
                        <span className='sr-only'>{link.label}</span>
                     </motion.a>
                  ))}
               </div>
            </motion.div>
         </div>
      </footer>
   );
}
