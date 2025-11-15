'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionTitle({ title, description, align = 'center' }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${alignClass}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground md:mx-0">
          {description}
        </p>
      )}
    </motion.div>
  )
}
