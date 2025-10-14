// JSX-only component — explicit React import not required
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
        imageUrl: Airton
    },
    {
        name: "Diogo Oliveira",
        role: "BackEnd Engineer",
        imageUrl: Diogo
    },
    {
        name: "Bruno Charao",
        role: "FullStack and QA Analyst",
        imageUrl: Bruno
    },
    {
        name: "João Ferreira",
        role: "BackEnd Engineer",
        imageUrl: Joao
    },
    {
        name: "Nuno Vieira",
        role: "BackEnd and Architect Engineer ",
        imageUrl: Nuno
    },
    {
        name: "Rafael Rodrigues",
        role: "FrontEnd Engineer",
        imageUrl: Rafa
    }
]


export default function Equipe() {
  return (
    <section id ="equipe" className='py-30 min-h-screen bg-white dark:bg-black/89 dark:text-white '>

      <div className='xl:flex xl:flex-row items-center justify-center  h-full flex flex-col '>
            <div className='flex flex-col  text-center h-full'>
                    <h1 className='text-3xl font-bold mb-4'>Equipe</h1>
                    <h2>Esta seção contém informações sobre a equipe do projeto.</h2>

                </div>
                
                    <div className='grid grid-cols-2 my-5 gap-2  sm:grid-cols-2 md:grid-cols-3 sm:gap-10 sm:p-10'>
                    {
                        mockedTeamMembers.map((member, index) => (
                        <TeamMemberCard 
                            key={index}
                            name={member.name}
                            role={member.role}
                            imageUrl={member.imageUrl}
                        />
                        ))
                    }
                    
                    </div>


      </div>
     
    </section>
  )
}
