import React from 'react'
import { motion } from 'framer-motion'

const trainers = [
  { name: 'Ava Carter', role: 'Strength & Conditioning', img: 'https://images.unsplash.com/photo-1594737625785-c6683fc6a6d7?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Kai Nguyen', role: 'HIIT & Cardio', img: 'https://images.unsplash.com/photo-1571907480495-7da129e1d82f?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Jules Park', role: 'Mobility & Core', img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1200&auto=format&fit=crop' },
]

const Trainers = () => {
  return (
    <section id="trainers" className="relative bg-[#030712] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet the Coaches</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5"
            >
              <img src={t.img} alt={t.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4">
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-white/70 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
