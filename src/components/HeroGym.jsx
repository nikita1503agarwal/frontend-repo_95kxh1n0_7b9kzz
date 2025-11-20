import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const HeroGym = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#030712] text-white">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1qf9mY9nqAz0vE9c/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full" />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08]"
          >
            Train in 3D. Push Beyond Limits.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg text-white/80"
          >
            A next-gen gym experience with immersive visuals, elite coaching, and personalized programs designed to help you crush your goals.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-[0_10px_30px_rgba(20,184,166,0.45)]">Start Free Trial</button>
            <button className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10">View Classes</button>
          </motion.div>

          <div className="mt-8 flex items-center gap-6 text-white/70">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} className="w-9 h-9 rounded-full ring-2 ring-black/40" src={`https://i.pravatar.cc/48?img=${i+10}`} alt="member" />
              ))}
            </div>
            <p>Trusted by 10k+ athletes • Avg rating 4.9/5</p>
          </div>
        </div>
      </div>

      {/* floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hidden md:block absolute right-10 bottom-20 z-10"
      >
        <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
          <p className="text-sm"><span className="text-emerald-400 font-semibold">AI Coach</span> recommends Hypertrophy Plan</p>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroGym
