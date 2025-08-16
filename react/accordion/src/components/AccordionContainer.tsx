'use client'

import { useState } from 'react'
import { toggleAccordion } from '@/lib/toggleAccordion'
import AccordionCard from '@/components/AccordionCard'
import { accordionList } from '@/data/accordionData'

export default function AccordionContainer() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setActiveId(prev => toggleAccordion(prev, id))
  }

  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-5 shadow-xl shadow-black/30">
      <h1 className="text-center text-slate-700 mb-8 text-4xl font-bold">
        Mysteries of the Himalayas
      </h1>
      <div>
        {accordionList.map((item) => (
          <AccordionCard
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onClick={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
  )
}