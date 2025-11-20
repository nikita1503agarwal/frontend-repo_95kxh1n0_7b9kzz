import React from 'react'
import Hero3D from './components/Hero3D'
import ShowcaseGrid from './components/ShowcaseGrid'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Hero3D />
      <ShowcaseGrid />

      <section className="bg-[#0A0A0A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Buttons', desc: 'Rounded 12–16px, gradient primary, white text', swatch: ['#0066FF','#7A2CFF','#FF1F81'] },
            { title: 'Cards', desc: 'Light: #FFF with subtle shadow. Dark: #14141B + soft border', swatch: ['#FFFFFF','#14141B','#1E1E1E'] },
            { title: 'Inputs', desc: '10px radius, focus #0066FF', swatch: ['#D0D0D0','#0066FF'] },
          ].map((b,i) => (
            <div key={i} className="rounded-2xl bg-[#14141B] border border-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-white/70 text-sm mb-4">{b.desc}</p>
              <div className="flex gap-2">
                {b.swatch.map((c,idx) => (
                  <div key={idx} className="w-8 h-8 rounded-xl" style={{ background: c }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white/70 text-sm py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Synlo. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="opacity-70">Made with</span>
            <span className="bg-gradient-to-r from-[#0066FF] via-[#7A2CFF] to-[#FF1F81] text-transparent bg-clip-text font-semibold">energy</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
