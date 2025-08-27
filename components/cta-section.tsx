'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
   return (
      <section id='contact' className='py-36 px-4 sm:px-6 lg:px-8 bg-slate-900/50'>
         <div className='max-w-4xl mx-auto'>
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className='glass-card border border-white/25 bg-slate-950 glow-purple text-center p-6 md:p-12 rounded-2xl'
            >
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className='text-3xl lg:text-5xl font-bold mb-6'
               >
                  Tertarik <span className='text-primary'>Berkolaborasi?</span>
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='lg:text-xl text-base text-muted-foreground mb-8 max-w-2xl mx-auto'
               >
                  Mari kita bangun aplikasi yang impactful bersama-sama. Saya siap membantu mewujudkan ide Anda menjadi
                  kenyataan.
               </motion.p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className='flex flex-col sm:flex-row gap-4 justify-center'
               >
                  <Link href={'mailto:musaganteng071@gmail.com'} target='_blank'>
                     <Button
                        size='lg'
                        className='glass glow-purple-hover bg-purple-900/70 hover:bg-purple-900/90 text-base px-8 py-6'
                     >
                        <Mail className='w-5 h-5 mr-2' />
                        Hubungi Saya via Email
                     </Button>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/musaalfian/'} target='_blank'>
                     <Button
                        size='lg'
                        variant='outline'
                        className='glass  text-base px-8 py-6 border-white/30 hover:bg-slate-800 hover:text-white bg-slate-900'
                     >
                        <Linkedin className='w-5 h-5 mr-2' />
                        Lihat LinkedIn Saya
                     </Button>
                  </Link>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
