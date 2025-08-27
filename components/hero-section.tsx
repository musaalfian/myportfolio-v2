'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TechStackAnimation } from './tech-stack-animation';

export function HeroSection({ scrollToSection }: any) {
   return (
      <section id='home' className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
         <div className='max-w-6xl mx-auto w-full'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
               {/* Left Content */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className='space-y-8'
               >
                  <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2, duration: 0.8 }}
                     className='text-6xl lg:text-8xl font-bold'
                  >
                     <span className='text-foreground'>I'm Musa</span>
                  </motion.h1>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4, duration: 0.8 }}
                     className='space-y-4'
                  >
                     <h2 className='text-xl lg:text-2xl text-white font-medium'>
                        Fullstack Web Developer | Laravel & Next.js Enthusiast
                     </h2>
                     <p className='text-lg text-white/80 max-w-lg leading-relaxed'>
                        Membangun aplikasi web modern dengan performa, desain, dan pengalaman terbaik.
                     </p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6, duration: 0.8 }}
                     className='flex flex-col sm:flex-row gap-4'
                  >
                     <Button
                        size='lg'
                        onClick={() => scrollToSection('#projects')}
                        className='glass-card glow-purple-hover text-lg px-8 py-6 bg-primary hover:bg-primary/90'
                     >
                        Lihat Proyek Saya
                     </Button>
                     <Button
                        size='lg'
                        variant='outline'
                        onClick={() => scrollToSection('#contact')}
                        className='glass text-lg px-8 py-6 border-primary/50 hover:bg-primary/10'
                     >
                        Hubungi Saya
                     </Button>
                  </motion.div>
               </motion.div>

               {/* Right Content - Tech Stack Animation */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className='flex justify-center lg:justify-end'
               >
                  <TechStackAnimation />
               </motion.div>
            </div>
         </div>
      </section>
   );
}
