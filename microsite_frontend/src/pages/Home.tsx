import React from 'react'

export default function Home() {
  return (
    <section id ="home" className='min-h-screen bg-white dark:bg-black dark:text-white'>

    <div className='flex flex-col items-center justify-center  h-screen '>

        <div className='text-center mb-5  p-1 rounded-lg bg-gray-100 dark:bg-gray-800'>
            <p>Projeto Final de Licenciatura 2025/2026</p>
        </div>
        <h1 className='text-4xl font-bold'>QuickDesk – IT support platform</h1>
        <p className='mt-5 max-w-3xl text-center text-xl'>Desenvolvimento de uma plataforma web de gestão de serviços de IT para otimização de processos de suporte, com portal self-service, automação de tickets e dashboards em tempo real.</p>
        <div className='flex flex-row  items-center justify-center space-x-10 mt-10'>
            <button className='text-white hover:underline hover:cursor-pointer bg-black p-3 rounded-2xl dark:bg-gray-800 dark:text-white' >Documentacao PDF</button>
            <button className='hover:underline hover:cursor-pointer bg-white  border  p-3 rounded-2xl dark:border-0 dark:bg-gray-800 dark:text-white'>Ver codigo</button>
        </div>
   
    </div>
   
   </section>
  )
}
