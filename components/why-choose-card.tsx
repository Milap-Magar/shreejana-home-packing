'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface WhyChooseCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function WhyChooseCard({ icon: Icon, title, description }: WhyChooseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card p-6 md:p-8 rounded-lg border border-border hover:border-primary transition-colors text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mb-4 inline-block"
      >
        <Icon className="w-12 h-12 text-primary" />
      </motion.div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
