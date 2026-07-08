'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MessageSquare, Settings, LogOut, Menu, X, PieChart, SendHorizontal, Users, CreditCard } from 'lucide-react'
import { clsx } from 'clsx'
import { useState, useEffect } from 'react'
import { ThemeToggle } from './ui/theme-toggle'

const navItems = [
  { name: 'Chat', href: '/dashboard', icon: MessageSquare },
  { name: 'Analytics', href: '/analytics', icon: PieChart },
  { name: 'Transactions', href: '/transactions', icon: SendHorizontal },
  { name: 'Beneficiaries', href: '/beneficiaries', icon: Users },
  { name: 'Cards', href: '/cards', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
]

interface SidebarUserProfile {
  name: string
  email: string
}

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [userProfile, setUserProfile] = useState<SidebarUserProfile | null>(null)
  const [isSigningOut, setIsSigningOut] = useState(false)

  useEffect(() => {
    setMounted(true)
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('/api/user')
        if (response.ok) {
          const profile = await response.json()
          setUserProfile({ name: profile.name, email: profile.email })
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error)
      }
    }
    fetchUserProfile()
  }, [])

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
    } finally {
      router.push('/login')
      router.refresh()
    }
  }

  const SidebarContent = (_props: { isMobile?: boolean }) => (
    <motion.div 
      animate={{ width: _props.isMobile ? 260 : (isCollapsed ? 80 : 240) }}
      transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
      className="flex flex-col h-full bg-brown shrink-0 border-r border-white/5 relative z-50 overflow-hidden"
    >
      {!_props.isMobile && (
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-8 w-6 h-6 bg-brown-light border border-white/10 rounded-full flex items-center justify-center text-cream/70 hover:text-cream z-50 shadow-md transition-transform hover:scale-110"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      )}

      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center border border-white/5 group-hover:scale-105 transition-all duration-300">
            <img src="/lumoFi-logo.png" alt="Lumo Logo" className="w-6 h-6 object-contain" />
          </div>
          {!isCollapsed && <span className="font-heading text-xl text-cream font-bold whitespace-nowrap">Lumo</span>}
        </Link>
        {mobileMenuOpen && (
          <button className="md:hidden text-cream" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        )}
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={clsx(
                'relative flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200 font-medium overflow-hidden',
                isActive
                  ? 'text-ember'
                  : 'text-cream/70 hover:bg-white/5 hover:text-cream'
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active-pill"
                  transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                  className="absolute inset-0 bg-white/10 rounded-xl border-l-4 border-ember"
                />
              )}
              {mounted && (
                <item.icon
                  size={20}
                  className={clsx('relative z-10', isActive ? 'text-ember' : 'text-cream/70')}
                />
              )}
              {!isCollapsed && <span className="relative z-10 whitespace-nowrap ml-1">{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className={clsx("flex items-center gap-3 mb-4", isCollapsed && "justify-center")}>
          <div className="w-10 h-10 rounded-full bg-black/20 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src={`https://api.dicebear.com/7.x/notionists/svg?seed=${userProfile?.name || 'Lumo'}&backgroundColor=transparent`} 
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          {!isCollapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-cream truncate">{userProfile?.name ?? 'Lumo User'}</p>
              <p className="text-xs text-cream/50 truncate">{userProfile?.email ?? ''}</p>
            </div>
          )}
        </div>
        <div className={clsx("flex mb-4", isCollapsed ? "justify-center" : "gap-2")}>
          <ThemeToggle variant={isCollapsed ? "icon" : "pill"} />
        </div>
        <button
          onClick={handleSignOut}
          disabled={isSigningOut}
          className={clsx("flex items-center gap-3 py-2 text-sm text-danger hover:bg-danger/10 rounded-lg transition-colors disabled:opacity-50", isCollapsed ? "justify-center px-0 mx-auto w-10 h-10" : "px-4 w-full")}
        >
          {mounted && <LogOut size={16} className="shrink-0" />}
          {!isCollapsed && (isSigningOut ? 'Signing Out…' : 'Sign Out')}
        </button>
      </div>
    </motion.div>
  )

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-brown/90 backdrop-blur-md border-b border-white/5 w-full shrink-0 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <img src="/lumoFi-logo.png" alt="Lumo Logo" className="w-8 h-8 object-contain" />
          {!isCollapsed && <span className="font-heading text-xl text-cream font-bold whitespace-nowrap">Lumo</span>}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="text-cream" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            {mounted && <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-screen sticky top-0 z-40 relative">
        <SidebarContent isMobile={false} />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              className="relative"
            >
              <SidebarContent isMobile={true} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
