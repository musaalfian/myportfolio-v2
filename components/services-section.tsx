"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Palette, TestTube } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Analisis & Perencanaan",
    description: "Memahami kebutuhan pengguna dan menyusun arsitektur aplikasi yang solid dan scalable.",
  },
  {
    icon: Palette,
    title: "Desain & Pengembangan",
    description: "Membangun UI/UX modern dengan teknologi terkini dan best practices development.",
  },
  {
    icon: TestTube,
    title: "Testing & Deployment",
    description: "Memastikan kualitas aplikasi melalui testing menyeluruh dan deployment yang optimal.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Membawa Ide Menjadi <span className="text-primary">Aplikasi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proses pengembangan yang terstruktur untuk menghasilkan aplikasi web berkualitas tinggi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card glow-purple-hover h-full border-border/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 rounded-full glass flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
