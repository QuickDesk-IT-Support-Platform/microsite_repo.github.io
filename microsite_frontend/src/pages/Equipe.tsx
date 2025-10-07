import React from 'react'
import TeamMemberCard from '../shared/components/TeamMemberCard'
import Airton from '../assets/airton.jpeg'
import Diogo from '../assets/diogo.jpeg'
import Nuno from '../assets/nuno.jpeg'
import Joao from '../assets/joao.jpeg'
import Rafa from '../assets/rafa.jpeg'
import Bruno from '../assets/bruno.jpeg'
const mockedTeamMembers = [
    {
        name: "Airton Moreira",
        role: "FullStack and DevOps Engineer",
        description: "Especialista em gestão de produtos com 8 anos de experiência em desenvolvimento de soluções inovadoras.",
        imageUrl: Airton
    },
    {
        name: "Diogo Oliveira",
        role: "BackEnd Engineer",
        description: "Desenvolvedor sênior com expertise em arquiteturas escaláveis e liderança técnica de equipes.",
        imageUrl: Diogo
    },
    {
        name: "Bruno Charao",
        role: "FullStack and QA Analyst",
        description: "Designer apaixonada por criar experiências digitais intuitivas e centradas no usuário.",
        imageUrl: Bruno
    },
    {
        name: "João Ferreira",
        role: "BackEnd Engineer",
        description: "Desenvolvedor versátil com conhecimento em tecnologias front-end e back-end modernas.",
        imageUrl: Joao
    },
    {
        name: "Nuno Vieira",
        role: "BackEnd and Architect Engineer ",
        description: "Especialista em infraestrutura cloud e automação de processos de desenvolvimento e deploy.",
        imageUrl: Nuno
    },
    {
        name: "Rafael Rodrigues",
        role: "FrontEnd Engineer",
        description: "Analista de qualidade focado em garantir a excelência dos produtos através de testes automatizados.",
        imageUrl: Rafa
    }
]


export default function Equipe() {
  return (
    <section id ="equipe" className='py-30 min-h-screen bg-white dark:bg-black dark:text-white '>

      <div className='xl:flex xl:flex-row items-center justify-center  h-full flex flex-col '>
            <div className='flex flex-col  text-center h-full'>
                    <h1 className='text-3xl font-bold mb-4'>Equipe</h1>
                    <h2>Esta seção contém informações sobre a equipe do projeto.</h2>

                </div>
                
                <div className='flex flex-col items-center justify-center  '>
                    <div className='grid grid-cols-2 my-5 mr-4  sm:grid-cols-2 md:grid-cols-3 sm:gap-10 sm:p-10'>
                    {
                        mockedTeamMembers.map((member, index) => (
                        <TeamMemberCard 
                            key={index}
                            name={member.name}
                            role={member.role}
                            description={member.description}
                            imageUrl={member.imageUrl}
                        />
                        ))
                    }
                    
                    </div>
                </div>


      </div>
     
    </section>
  )
}
