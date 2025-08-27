'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
   {
      title: 'E-Commerce Platform',
      description:
         'Platform e-commerce modern dengan fitur real-time inventory, payment gateway, dan admin dashboard yang komprehensif.',
      image: '/modern-ecommerce-dashboard.png',
      technologies: ['Next.js', 'Laravel', 'MySQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
   },
   {
      title: 'Task Management System',
      description:
         'Aplikasi manajemen proyek dengan fitur kolaborasi tim, tracking progress, dan reporting yang detail.',
      image: '/task-management-interface.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
   },
   {
      title: 'Learning Management System',
      description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan sistem sertifikasi.',
      image: '/learning-platform-interface.png',
      technologies: ['Next.js', 'PHP', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
   },
];

export function ProjectsSection() {
   return (
      <section id='projects' className='pt-36 px-4 sm:px-6 lg:px-8 bg-slate-900/50'>
         <div className='max-w-7xl mx-auto'>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className='text-center mb-16'
            >
               <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                  Proyek <span className='text-primary'>Unggulan</span>
               </h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-4'>
                  Beberapa karya terbaik saya dalam membangun aplikasi web modern
               </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
               {projects.map((project, index) => (
                  <motion.div
                     key={project.title}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4 }}
                     whileHover={{ y: -10 }}
                  >
                     <Card className='glass-card bg-slate-950 glow-purple-hover h-full border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden'>
                        <div className='relative overflow-hidden'>
                           <motion.img
                              src={project.image}
                              alt={project.title}
                              className='w-full h-48 object-cover'
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                           />
                           <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                        </div>

                        <CardContent className='p-6'>
                           <h3 className='text-xl font-semibold mb-3 text-foreground'>{project.title}</h3>
                           <p className='text-muted-foreground mb-4 leading-relaxed'>{project.description}</p>

                           <div className='flex flex-wrap gap-2 mb-6'>
                              {project.technologies.map((tech) => (
                                 <Badge
                                    key={tech}
                                    variant='secondary'
                                    className='glass-card border border-white/25 text-xs'
                                 >
                                    {tech}
                                 </Badge>
                              ))}
                           </div>

                           <div className='flex gap-3'>
                              <Button
                                 size='sm'
                                 className='flex-1 glass py-5 glow-purple-hover border border-white/10 bg-purple-900/70 hover:bg-purple-900/90'
                              >
                                 <ExternalLink className='w-4 h-4 mr-2' />
                                 Live Demo
                              </Button>
                              <Button
                                 size='sm'
                                 variant='outline'
                                 className='glass border-primary/50 py-5 hover:bg-primary/10 bg-transparent'
                              >
                                 <Github className='w-4 h-4' />
                              </Button>
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
