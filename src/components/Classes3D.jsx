import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Dumbbell, Timer, HeartPulse } from 'lucide-react'

const data = [
  { title: 'Strength Lab', icon: Dumbbell, color: 'from-emerald-500 to-green-400', desc: 'Compound lifts, progressive overload, and form-first coaching.' },
  { title: 'HIIT Arena', icon: Timer, color: 'from-cyan-400 to-sky-400', desc: 'Explosive intervals to torch fat and skyrocket endurance.' },
  { title: 'Metabolic Mayhem', icon: Flame, color: 'from-orange-500 to-amber-400', desc: 'Sweat-fueled circuits to boost metabolism and power.' },
  { title: 'Mobility & Core', icon: HeartPulse, color: 'from-pink-500 to-rose-400', desc: 'Stability, flexibility, and longevity for athletes.' },
]

const Classes3D = () => {
  return (
    <section id="classes" className="relative bg-[#030712] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Classes</h2>
            <p className="text-white/70 mt-2">Immersive training sessions with dynamic lighting and reactive intensity levels.</p>
          </div>
          <button className="hidden md:block px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10">See full schedule</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-xl p-5"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center shadow-[0_12px_40px_rgba(16,185,129,0.35)]`}>
                <c.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="text-white/70 text-sm mt-1">{c.desc}</p>
              <div className="absolute -bottom-24 -right-16 w-[220px] h-[220px] rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="absolute -top-24 -left-16 w-[220px] h-[220px] rounded-full bg-cyan-400/10 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes3D
