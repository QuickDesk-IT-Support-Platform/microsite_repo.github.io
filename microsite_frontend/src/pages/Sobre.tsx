import React from 'react'

export default function Sobre() {
  return (
   <section id ="sobre" className='min-h-screen dark:text-white bg-white dark:bg-black py-10'>
    <div className='flex flex-col items-center justify-center '>
        <h2 className='text-4xl font-bold mt-20 mb-5'>Sobre o Projeto</h2>
        <p className='max-w-3xl text-center text-xl '>Uma visão abrangente do projeto desenvolvido como trabalho final de licenciatura.</p>
    </div>
   
    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 p-10 mt-10  mx-auto'>
      <div className='p-10 rounded-2xl minh-h-100 flex flex-col justify-center shadow-2xl  dark:border-3 dark:border-gray-900  dark:shadow-gray-700 '>
        <h1 className='text-2xl font-bold mb-4'>Resumo</h1>
        <span className=' sm:text-xl'>
          O QuickDesk é uma plataforma de gestão de suporte informático (ITSM) que centraliza pedidos de assistência, incidentes e ativos de TI. Inspirado em soluções como o ServiceNow e o EasyVista, o projeto tem como objetivo otimizar a comunicação entre utilizadores e equipas de suporte, automatizar processos e melhorar a eficiência na resolução de problemas.
        </span>
      </div>


      <div className='p-10 rounded-2xl h-100 flex flex-col  shadow-2xl  dark:border-3 dark:border-gray-900  dark:shadow-gray-700 '>
        <h1 className='text-xl font-bold mb-4'>Informacoes do projeto</h1>
      </div>
      <div>
        <span>
          O projeto visa não apenas atender às necessidades atuais de gestão de suporte, mas também proporcionar uma base sólida para futuras expansões e melhorias, alinhando-se às melhores práticas do setor.
        </span>
      </div>
      
    </div>

   </section>
  )
}
