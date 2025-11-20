import React from 'react'

const SynloLogo = ({ size = 40, withWordmark = true }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div
        className="relative grid place-items-center"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="synlo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="50%" stopColor="#7A2CFF" />
              <stop offset="100%" stopColor="#FF1F81" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect x="0" y="0" width="100" height="100" rx="24" fill="url(#synlo-gradient)" filter="url(#glow)" />
          <path d="M30 30 L60 45 L45 52 L70 65 L40 70 L55 58 L30 45 Z" fill="white" opacity="0.95" />
        </svg>
      </div>
      {withWordmark && (
        <div className="font-bold tracking-tight text-white text-2xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066FF] via-[#7A2CFF] to-[#FF1F81]">Synlo</span>
        </div>
      )}
    </div>
  )
}

export default SynloLogo
