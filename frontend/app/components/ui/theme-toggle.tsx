'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { clsx } from 'clsx'

export function ThemeToggle({ variant = 'icon' }: { variant?: 'icon' | 'pill' }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    if (variant === 'pill') return <div className="w-full h-10 rounded-full bg-white/5 animate-pulse" />
    return <div className="w-10 h-10 rounded-xl bg-white/5 animate-pulse" />
  }

  if (variant === 'pill') {
    return (
      <div className="flex bg-black/20 p-1 rounded-full border border-white/5 relative w-full">
        <div 
          className={clsx(
            "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white/10 rounded-full transition-all duration-300 shadow-sm",
            resolvedTheme === 'dark' ? "left-1" : "left-[calc(50%+2px)]"
          )}
        />
        <button 
          onClick={() => setTheme('dark')}
          className={clsx("flex-1 flex items-center justify-center py-2 relative z-10 transition-colors", resolvedTheme === 'dark' ? "text-cream" : "text-cream/40 hover:text-cream/70")}
        >
          <Moon size={16} className={resolvedTheme === 'dark' ? "scale-110" : "scale-100"} />
        </button>
        <button 
          onClick={() => setTheme('light')}
          className={clsx("flex-1 flex items-center justify-center py-2 relative z-10 transition-colors", resolvedTheme === 'light' ? "text-ember" : "text-cream/40 hover:text-cream/70")}
        >
          <Sun size={16} className={resolvedTheme === 'light' ? "scale-110" : "scale-100"} />
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 text-cream transition-colors flex items-center justify-center border border-white/10 w-10 h-10"
      title="Toggle Theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-2.5 left-2.5 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
