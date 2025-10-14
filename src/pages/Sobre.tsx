import React from 'react'
import { CiCalendar,CiLocationOn } from "react-icons/ci";
import {FiUsers} from "react-icons/fi"
import { GrUserManager } from "react-icons/gr";
export default function Sobre() {
  return (
   <section id ="sobre" className='min-h-screen dark:text-white bg-white dark:bg-black/89 py-10'>
    <div className='flex flex-col items-center justify-center '>
        <h2 className='text-4xl font-bold mt-20 mb-5'>Sobre o Projeto</h2>
        <p className='max-w-3xl text-center text-xl '>Uma visão abrangente do projeto desenvolvido como trabalho final de licenciatura.</p>
    </div>
   
    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 p-10 mt-10  mx-auto'>
      <div className='p-10 rounded-2xl minh-h-100 flex flex-col justify-center shadow-2xl dark:shadow-none dark:bg-[#121212] '>
        <h1 className='text-2xl font-medium mb-4'>Resumo</h1>
        <span className=' sm:text-xl'>
          O QuickDeskIT é uma plataforma de gestão de serviços que centraliza pedidos de assistência, incidentes e ativos. Inspirado em soluções como o ServiceNow e o EasyVista, o projeto tem como objetivo otimizar a comunicação entre utilizadores e equipas de suporte, automatizar processos e melhorar a eficiência na resolução de pedidos.        </span>
      </div>


      <div className='p-10 rounded-2xl min-h-100 flex flex-col  shadow-2xl dark:shadow-none dark:bg-[#121212] '>
        <h1 className='text-2xl font-medium mb-4 text-center'>Informações do projeto</h1>

        <div className='flex flex-col space-y-5 mb-5'>
            <div className="flex flex-row items-center">
              <div>
                  <CiCalendar className='w-15 h-15'/>
              </div>

              <div className='ml-5'>
                <h2 className='text-lg font-medium'>Duração</h2>
                <span>Setembro de 2025 - julho de 2026</span>
              </div>

            </div>
             <div className="flex flex-row items-center">
              <div>
                  <CiLocationOn className='w-15 h-15'/>
              </div>

              <div className='ml-5'>
                <h2 className='text-lg font-medium'>Instituição</h2>
                <span>Universidade de Aveiro</span>
              </div>

            </div>
             <div className="flex flex-row items-center">
              <div>
                  <FiUsers className='w-15 h-15'/>
              </div>

              <div className='ml-5'>
                <h2 className='text-lg font-medium'>Equipe</h2>
                <span>6 Estudantes</span>
              </div>

            </div>
            <div className="flex flex-row items-center ">
              <div>
                  <GrUserManager className='w-15 h-15'/>
              </div>

              <div className='ml-5'>
                <h2 className='text-lg font-medium'>Orientadores</h2>
                <div className='flex flex-col space-y-1 bg-gray-100 dark:text-black px-5 py-2 sm:px-10 sm:py-2 rounded-lg'>
                  <a href="mailto:jlo@ua.pt" className='hover:underline'>José Luís Oliveira  </a>
                  <a href="mailto:joao.rafael.almeida@ua.pt" className='hover:underline'>João Almeida </a>
                </div>

              </div>

            </div>
        </div>

        
      </div>
      
      
    </div>
  
   </section>
  )
}
