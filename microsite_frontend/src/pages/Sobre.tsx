import React from 'react'

export default function Sobre() {
  return (
   <section id ="sobre" className='min-h-screen bg-white '>

    <div className='flex flex-col items-center justify-center  h-screen '>

        <div className='text-center mb-5  p-1 rounded-lg bg-gray-100'>
            <p>Projeto Final de Licenciatura 2025/2026</p>
        </div>
        <h1 className='text-4xl font-bold'>QuickDesk – IT support platform</h1>
        <p className='mt-5 max-w-3xl text-center text-xl'>Desenvolvimento de uma plataforma web de gestão de serviços de IT para otimização de processos de suporte, com portal self-service, automação de tickets e dashboards em tempo real.</p>
        <div className='flex flex-row  items-center justify-center space-x-10 mt-10'>
            <p className='text-white hover:underline bg-black p-3 rounded-2xl' >Documentacao PDF</p>
            <p className='hover:underline bg-white border p-3 rounded-2xl'>Ver codigo</p>
        </div>
   
    </div>
   
   </section>
  )
}
