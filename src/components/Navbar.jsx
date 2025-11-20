import React from 'react'
import { Dumbbell, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-xl bg-black/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 grid place-items-center shadow-[0_8px_30px_rgba(16,185,129,0.4)]">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">GYM3D</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#classes" className="hover:text-white transition">Classes</a>
          <a href="#trainers" className="hover:text-white transition">Trainers</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl border border-white/10 text-white/90 hover:bg-white/10">Sign In</button>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold shadow-[0_10px_30px_rgba(6,182,212,0.35)]">Join Now</button>
        </div>
        <button className="md:hidden text-white/90" aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
