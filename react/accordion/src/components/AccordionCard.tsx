import { AccordionData } from "@/types/accordionData"


interface AccordionCardProps {
  item: AccordionData
  isActive: boolean
  onClick: () => void
}

export default function AccordionCard({ item, isActive, onClick }: AccordionCardProps) {
  return (
    <div className="border border-white/40 rounded-lg mb-3 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
      <div
        className={`cursor-pointer px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          isActive
            ? 'bg-gradient-to-br from-slate-700 to-slate-900'
            : 'bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
        }`}
        onClick={onClick}
      >
        <h3 className="text-white text-xl font-semibold m-0">
          {item.title}
        </h3>
        <span
          className={`text-white text-xl font-bold bg-white/10 px-3 py-1 rounded-full transition-transform duration-300 ${
            isActive ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </div>
      
      <div
        className={`bg-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          isActive ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="p-6 text-slate-800 leading-7 text-lg">
          {item.description}
        </div>
      </div>
    </div>
  )
}