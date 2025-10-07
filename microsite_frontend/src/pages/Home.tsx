import React from 'react'
import GithubIcon from '../assets/github_icon.png'
export default function Home() {
  return (
    <section id ="home" className='min-h-screen bg-white dark:bg-black dark:text-white'>

    <div className='flex flex-col items-center justify-center  h-screen '>
{/* 
        <div className='text-center mb-5  p-1 rounded-lg bg-gray-100 dark:bg-gray-800'>
            <p>Projeto Final de Licenciatura 2025/2026</p>
        </div> */}
        <h1 className='text-xl sm:text-4xl font-bold'>QuickDesk – IT support platform</h1>
        <span className='mt-5 max-w-3xl text-sm text-center sm:text-xl'>Desenvolvimento de uma plataforma web de gestão de serviços de IT para otimização de processos de suporte, com portal self-service, automação de tickets e dashboards em tempo real.</span>
        <div className='flex flex-row  items-center justify-center space-x-10 mt-10'>            
            <button className='flex items-center justify-center space-x-2 border-0  p-3 rounded-2xl  hover:cursor-pointer  bg-gray-200   dark:text-black'>
              <img src={GithubIcon} alt="Github Icon" className='inline-block max-h-7' />
              <span>Ver código</span>
           </button>
        </div>
   
    </div>
   
   </section>
  )
}
