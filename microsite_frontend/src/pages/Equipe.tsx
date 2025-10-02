import React from 'react'
import TeamMemberCard from '../shared/components/TeamMemberCard'
import Airton from '../assets/airton.jpeg'
import Diogo from '../assets/diogo.jpeg'
import Nuno from '../assets/nuno.jpeg'
const mockedTeamMembers = [
    {
        name: "Airton Moreira",
        role: "Product Manager",
        description: "Especialista em gestão de produtos com 8 anos de experiência em desenvolvimento de soluções inovadoras.",
        imageUrl: Airton
    },
    {
        name: "Diogo Oliveira",
        role: "Tech Lead",
        description: "Desenvolvedor sênior com expertise em arquiteturas escaláveis e liderança técnica de equipes.",
        imageUrl: Diogo
    },
    {
        name: "Bruno Charao",
        role: "UX/UI Designer",
        description: "Designer apaixonada por criar experiências digitais intuitivas e centradas no usuário.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
        name: "João Vitor Batista Domingues Ferreira",
        role: "Full Stack Developer",
        description: "Desenvolvedor versátil com conhecimento em tecnologias front-end e back-end modernas.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
        name: "Nuno Vieira",
        role: "DevOps Engineer",
        description: "Especialista em infraestrutura cloud e automação de processos de desenvolvimento e deploy.",
        imageUrl: Nuno
    },
    {
        name: "Lucas Mendes",
        role: "QA Engineer",
        description: "Analista de qualidade focado em garantir a excelência dos produtos através de testes automatizados.",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
]


export default function Equipe() {
  return (
    <section id ="equipe" className='py-30 min-h-screen bg-white '>
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-3xl font-bold mb-4'>Equipe</h1>
        <h2>Esta seção contém informações sobre a equipe do projeto.</h2>

      </div>
     
     <div className='flex flex-col items-center justify-center  '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10'>
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


    </section>
  )
}
