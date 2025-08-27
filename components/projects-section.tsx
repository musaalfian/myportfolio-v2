'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
   {
      title: 'Sistem Manajemen Surat (SIMAS)',
      description: 'Platform manajemen surat digital dengan fitur pengarsipan, disposisi, dan notifikasi yang efisien.',
      image: '/simas.png',
      technologies: ['Laravel 11', 'JQuery', 'Chart.js', 'Tailwind CSS', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
   },
   {
      title: 'Sistem Audit Mutu Internal (SIAMI)',
      description: 'Aplikasi berbasis website yang digunakan untuk melakukan audit mutu internal FK Undip.',
      image: '/siami.jpg',
      technologies: ['Laravel 9', 'JQuery', 'Bootstrap', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
   },
   {
      title: 'Point of Sales (POS)',
      description: 'Aplikasi untuk mengelola barang, transaksi, dan laporan penjualan apotek.',
      image: '/pos-apotek.png',
      technologies: ['Laravel 9', 'JQuery', 'Bootstrap', 'Chart.js', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
   },
   {
      title: 'E-Catalog',
      description:
         'Platform e-katalog untuk jual beli tissue. Tersedia berbagai pilihan produk dan pembayaran direct ke WhatsApp.',
      image: '/tisumurah.png',
      technologies: ['Laravel 8', 'JQuery', 'MySQL', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
   },
   {
      title: 'Bandikmenti Batang',
      description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan sistem sertifikasi.',
      image: '/bandikmentibatang.png',
      technologies: ['CodeIgniter', 'JavaScript', 'MySQL', 'Bootstrap'],
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
                     <Card className='glass-card bg-slate-950 glow-purple-hover h-full border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden py-0'>
                        <div className='relative overflow-hidden'>
                           <motion.img
                              src={project.image}
                              alt={project.title}
                              className='w-full h-56 object-cover'
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                           />
                           <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                        </div>

                        <CardContent className='pt-0 pb-6'>
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
