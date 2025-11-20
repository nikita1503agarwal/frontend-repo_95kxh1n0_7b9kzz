import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import SynloLogo from './Logo'

const Hero3D = () => {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-center justify-between">
          <SynloLogo size={44} />
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">Login</button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#7A2CFF] to-[#FF1F81] text-white shadow-lg shadow-[#7A2CFF]/30">Get the app</button>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-[1.1]"
            >
              Find your plus-one. Discover unforgettable nights.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-white/80 max-w-xl"
            >
              Synlo connects you to events, matches you with the right plus-one, and turns moments into memories.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#0066FF] via-[#7A2CFF] to-[#FF1F81] text-white font-semibold shadow-[0_10px_30px_rgba(122,44,255,0.4)]">
                Explore events
              </button>
              <button className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white">
                How it works
              </button>
            </motion.div>

            <div className="mt-10 flex items-center gap-4 text-sm text-white/70">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-8 h-8 rounded-full ring-2 ring-black/40" src={`https://i.pravatar.cc/48?img=${i+3}`} alt="avatar" />
                ))}
              </div>
              <p>Trusted by 20k+ students and young professionals</p>
            </div>
          </div>

          <div className="relative h-[520px]">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-[#0066FF]/30 via-[#7A2CFF]/25 to-[#FF1F81]/30 blur-3xl" />
            <div className="relative h-full w-full rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <DeviceShowcase />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const DeviceShowcase = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-full">
      <PhoneMock screen="/screens/splash-light.svg" label="Splash" />
      <PhoneMock screen="/screens/home-dark.svg" dark label="Home" />
      <PhoneMock screen="/screens/event-detail-light.svg" label="Event" />
      <PhoneMock screen="/screens/plusone-dark.svg" dark label="Match" />
      <TabletMock screen="/screens/moments-light.svg" label="Moments" />
      <LaptopMock screen="/screens/dashboard-dark.svg" dark label="Dashboard" />
    </div>
  )
}

const PhoneMock = ({ screen, label, dark }) => (
  <div className="relative">
    <div className={`relative mx-auto w-[180px] h-[360px] rounded-[32px] ${dark ? 'bg-[#14141B]' : 'bg-white'} shadow-2xl`}>
      <div className="absolute inset-1 rounded-[28px] overflow-hidden">
        <img src={screen} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />
      </div>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/80 rounded-b-2xl" />
    </div>
    <p className="mt-2 text-center text-xs text-white/70">{label}</p>
  </div>
)

const TabletMock = ({ screen, label }) => (
  <div className="relative col-span-2">
    <div className="relative mx-auto w-[360px] h-[260px] rounded-[24px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-1 rounded-[20px] overflow-hidden">
        <img src={screen} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />
      </div>
    </div>
    <p className="mt-2 text-center text-xs text-white/70">{label}</p>
  </div>
)

const LaptopMock = ({ screen, label, dark }) => (
  <div className="relative col-span-2">
    <div className="relative mx-auto w-[420px] h-[260px] rounded-[12px] bg-[#1E1E1E] shadow-[0_20px_100px_rgba(122,44,255,0.45)]">
      <div className="absolute inset-1 rounded-[10px] overflow-hidden bg-black">
        <img src={screen} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]" />
      </div>
    </div>
    <p className="mt-2 text-center text-xs text-white/70">{label}</p>
  </div>
)

export default Hero3D
