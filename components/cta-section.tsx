'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

export function CTASection() {
   return (
      <section id='contact' className='pt-36 px-4 sm:px-6 lg:px-8'>
         <div className='max-w-4xl mx-auto'>
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className='glass-card glow-purple text-center p-12 rounded-2xl'
            >
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className='text-4xl lg:text-5xl font-bold mb-6'
               >
                  Tertarik <span className='text-primary'>Berkolaborasi?</span>
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'
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
                  <Button
                     size='lg'
                     className='glass glow-purple-hover bg-primary hover:bg-primary/90 text-lg px-8 py-6'
                  >
                     <Mail className='w-5 h-5 mr-2' />
                     Hubungi Saya via Email
                  </Button>
                  <Button
                     size='lg'
                     variant='outline'
                     className='glass border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 bg-transparent'
                  >
                     <Linkedin className='w-5 h-5 mr-2' />
                     Lihat LinkedIn Saya
                  </Button>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
