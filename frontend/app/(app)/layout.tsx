'use client'

import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/sidebar'

const BACKGROUNDS = [
  '/abstract_pattern_v1.png',
  '/auth_pattern_v2.png',
  '/abstract_pattern_3d.png'
]

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<string>('')

  useEffect(() => {
    // Pick a random background pattern on client side mount
    const randomBg = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]
    setBgImage(randomBg)
  }, [])

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full overflow-hidden bg-brown">
      <Sidebar />
      <div className="flex-1 relative w-full h-screen overflow-hidden">
        {/* Background 3D Pattern */}
        {bgImage && (
          <img 
            src={bgImage} 
            alt="Dashboard Background Pattern" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.03] mix-blend-screen pointer-events-none z-0"
          />
        )}
        
        <main className="relative z-10 w-full h-full flex flex-col overflow-y-auto pb-16 md:pb-0">
          {children}
        </main>
      </div>
    </div>
  )
}

