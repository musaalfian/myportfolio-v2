'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
   {
      position: 'Pengelola Sistem dan Jaringan',
      company: 'Fakultas Kedokteran Universitas Diponegoro',
      period: '2022 - Sekarang',
      description:
         'Memimpin pengembangan aplikasi e-commerce dengan Next.js dan Laravel. Meningkatkan performa aplikasi hingga 40% dan mengelola tim developer.',
      technologies: ['Next.js', 'Laravel', 'MySQL', 'Redis'],
   },
   {
      position: 'Fullstack Web Developer',
      company: 'Digital Solutions',
      period: '2021 - 2022',
      description:
         'Mengembangkan sistem manajemen inventory dan CRM untuk klien enterprise. Bertanggung jawab atas arsitektur database dan API development.',
      technologies: ['React', 'PHP', 'PostgreSQL', 'Docker'],
   },
   {
      position: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description:
         'Membangun interface user yang responsive dan interaktif untuk aplikasi fintech. Kolaborasi dengan tim design untuk implementasi UI/UX.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
   },
];

export function ExperienceSection() {
   return (
      <section id='experience' className='pt-36 px-4 sm:px-6 lg:px-8'>
         <div className='max-w-4xl mx-auto'>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className='text-center mb-16'
            >
               <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                  Pengalaman Kerja & <span className='text-primary'>Proyek</span>
               </h2>
               <p className='text-xl text-muted-foreground'>Perjalanan karir dalam mengembangkan solusi teknologi</p>
            </motion.div>

            <div className='space-y-8'>
               {experiences.map((exp, index) => (
                  <motion.div
                     key={exp.position}
                     initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.3 }}
                  >
                     <Card className='glass-card glow-purple-hover border border-white/20 hover:border-white/40 transition-all duration-300'>
                        <CardContent className='p-8'>
                           <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                              <div>
                                 <h3 className='text-xl font-semibold text-foreground mb-1'>{exp.position}</h3>
                                 <p className='text-primary font-medium'>{exp.company}</p>
                              </div>
                              <Badge variant='outline' className='glass border-primary/50 text-primary mt-2 md:mt-0'>
                                 {exp.period}
                              </Badge>
                           </div>

                           <p className='text-muted-foreground mb-6 leading-relaxed'>{exp.description}</p>

                           <div className='flex flex-wrap gap-2'>
                              {exp.technologies.map((tech) => (
                                 <Badge key={tech} variant='secondary' className='glass-card text-xs border-white/25'>
                                    {tech}
                                 </Badge>
                              ))}
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
