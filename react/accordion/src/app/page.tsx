import AccordionContainer from '@/components/AccordionContainer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/himalaya.jpg')] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <AccordionContainer />
      </div>
    </main>
  )
}