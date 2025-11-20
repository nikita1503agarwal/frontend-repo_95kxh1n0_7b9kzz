import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: 19, features: ['Gym floor access', 'Open gym hours', 'Community events'], cta: 'Join Starter' },
  { name: 'Elite', price: 39, features: ['All classes', 'Performance tracking', 'AI coach insights'], cta: 'Go Elite', highlight: true },
  { name: 'Pro+', price: 79, features: ['1:1 coaching', 'Custom nutrition', 'Priority booking'], cta: 'Become Pro+' },
]

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-[#030712] text-white py-20">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-emerald-400/10 to-cyan-400/0 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Memberships</h2>
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-2xl border border-white/10 p-6 backdrop-blur-xl ${t.highlight ? 'bg-gradient-to-br from-white/10 to-white/5 shadow-[0_20px_80px_rgba(6,182,212,0.25)]' : 'bg-white/5'}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-3xl font-bold">${t.price}<span className="text-base font-medium text-white/60">/mo</span></div>
              </div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full mt-6 px-4 py-2 rounded-xl font-semibold ${t.highlight ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black' : 'border border-white/10 bg-white/5 hover:bg-white/10'}`}>{t.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
