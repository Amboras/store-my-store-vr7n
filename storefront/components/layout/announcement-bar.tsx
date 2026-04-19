'use client'

import { useState } from 'react'
import { X, Leaf, ShieldCheck, Truck } from 'lucide-react'

const messages = [
  { icon: Truck, text: 'Complimentary shipping on all orders over $75' },
  { icon: Leaf, text: 'Clinically studied ingredients — third-party tested' },
  { icon: ShieldCheck, text: '60-day feel-it guarantee, or your money back' },
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-form-espresso text-form-cream">
      <div className="container-custom flex items-center justify-center gap-8 py-2 overflow-hidden">
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em]">
          {messages.map((m, i) => (
            <span key={i} className="flex items-center gap-2">
              <m.icon className="h-3.5 w-3.5" strokeWidth={1.5} />
              {m.text}
            </span>
          ))}
        </div>
        <div className="md:hidden flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]">
          <Leaf className="h-3.5 w-3.5" strokeWidth={1.5} />
          Complimentary shipping over $75
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
