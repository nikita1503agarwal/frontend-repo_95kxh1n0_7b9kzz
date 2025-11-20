import React from 'react'
import Navbar from './components/Navbar'
import HeroGym from './components/HeroGym'
import Classes3D from './components/Classes3D'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <main>
        <HeroGym />
        <Classes3D />
        <Trainers />
        <Pricing />

        <section id="faq" className="bg-[#030712] text-white py-20">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            {[{
              q: 'What makes this gym different?',
              a: 'Immersive 3D training atmosphere, elite coaches, and data-driven programming that adapts to you.'
            },{
              q: 'Do you offer a free trial?',
              a: 'Yes, enjoy a 7-day free trial with full access to classes and our AI coach insights.'
            },{
              q: 'Can I pause my membership?',
              a: 'You can pause anytime for up to 60 days per year with no extra fees.'
            },{
              q: 'What equipment do you have?',
              a: 'Full strength suite, Olympic platforms, kettlebells, sleds, assault bikes, cable stacks, and more.'
            }].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="font-semibold text-lg">{item.q}</h3>
                <p className="text-white/70 mt-2 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#030712] text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} GYM3D. Push beyond limits.</p>
          <div className="text-sm">
            <span className="opacity-70">Designed with </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold">motion & depth</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
