// JSX-only component — explicit React import not required
import { Link } from 'react-router-dom';
import GithubIcon from '../assets/github_icon.png'
export default function Home() {
  const handleArrowClick = () => {
    const SobreSection = document.getElementById('sobre');
    if (SobreSection) {
      SobreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id ="home" className='min-h-screen bg-white dark:bg-black/89 dark:text-white'>
      <div className='flex flex-col items-center justify-center  h-screen '>
        <h1 className='text-xl sm:text-4xl font-bold'>QuickDesk – IT support platform</h1>
        <span className='mt-5 max-w-3xl text-sm text-center sm:text-xl'>Desenvolvimento de uma plataforma web de gestão de serviços para otimização de processos de suporte, com portal self-service, automação de tickets e dashboards em tempo real.</span>
        <div className='flex flex-row  items-center justify-center space-x-10 mt-10'>
          <Link
            to='https://github.com/orgs/QuickDesk-IT-Support-Platform/repositories'
            target='_blank'
            className='flex items-center justify-center space-x-2 border-0  p-3 rounded-2xl  hover:cursor-pointer  bg-gray-200   dark:text-black '
          >
            <img src={GithubIcon} alt="Github Icon" className='inline-block max-h-7' />
            <span>Ver código</span>
          </Link>
        </div>

        <button
          onClick={handleArrowClick}
          className='mt-16 animate-bounce flex flex-col items-center focus:outline-none'
          aria-label='Ir para os objetivos'
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white hover:cursor-pointer">
            <path d="M12 5v14M12 19l-7-7M12 19l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
