import React from 'react'

const gradient = 'bg-gradient-to-r from-[#0066FF] via-[#7A2CFF] to-[#FF1F81]'

const ShowcaseGrid = () => {
  const items = [
    { title: 'Splash', img: '/screens/splash-light.png' },
    { title: 'Welcome', img: '/screens/welcome-dark.png' },
    { title: 'Phone Input', img: '/screens/phone-light.png' },
    { title: 'OTP', img: '/screens/otp-dark.png' },
    { title: 'Profile Setup', img: '/screens/profile-light.png' },
    { title: 'Home Feed', img: '/screens/home-dark.png' },
    { title: 'Event List', img: '/screens/event-list-light.png' },
    { title: 'Event Detail', img: '/screens/event-detail-light.png' },
    { title: 'Purchase', img: '/screens/purchase-dark.png' },
    { title: 'QR Ticket', img: '/screens/qr-light.png' },
    { title: 'Plus-One', img: '/screens/plusone-dark.png' },
    { title: 'Match Success', img: '/screens/match-light.png' },
    { title: 'Chat', img: '/screens/chat-dark.png' },
    { title: 'Moments', img: '/screens/moments-light.png' },
    { title: 'Organizer', img: '/screens/organizer-dark.png' },
    { title: 'Affiliate', img: '/screens/affiliate-light.png' },
    { title: 'Wallet', img: '/screens/wallet-dark.png' },
    { title: 'Account', img: '/screens/account-light.png' },
  ]

  return (
    <section className="relative bg-[#0A0A0A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">High-fidelity screens</h2>
        <p className="text-white/70 mb-10 max-w-3xl">A cohesive system with light and dark modes, energetic gradients, and youthful visuals across every surface. Perfect for presentations and marketing.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <figure key={idx} className="group rounded-2xl bg-[#14141B] border border-white/5 overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${gradient} mix-blend-screen`} />
              </div>
              <figcaption className="p-3 text-sm text-white/80 flex items-center justify-between">
                <span>{it.title}</span>
                <span className="px-2 py-1 rounded-md text-[10px] bg-white/10">Mockup</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseGrid
