// JSX-only component — explicit React import not required
import { Link } from 'react-router-dom';
import GithubIcon from '../assets/github_icon.png'
import QuickDeskPNG from '../assets/quickdesk-icon1.png';

export default function Home() {
  const handleArrowClick = () => {
    const SobreSection = document.getElementById('sobre');
    if (SobreSection) {
      SobreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id ="home" className='min-h-screen bg-gray-50 dark:bg-black/89 dark:text-white'>

    
      <div className='flex flex-col items-center justify-center  h-screen '>
        
        <div>
          <img src={QuickDeskPNG} alt="QuickDesk Logo" className='w-100 sm:w-130 mt-5'/>
        </div>

          <span
          className="
            mt-10
            max-w-3xl
            text-sm
            sm:text-2xl
            text-center
            text-gray-700
            leading-relaxed
            block
          "
        >
          Development of a web-based service management platform designed to optimize
          support processes — featuring a self-service portal, automated ticketing, and
          real-time dashboards.
        </span>

        <div className='flex flex-row  items-center justify-center space-x-10 mt-10'>
          <Link
            to='https://github.com/orgs/QuickDesk-IT-Support-Platform/repositories'
            target='_blank'
            className='flex items-center justify-center space-x-2 border-0  p-3 rounded-2xl  hover:cursor-pointer  bg-gray-200   dark:text-black '
          >
            <img src={GithubIcon} alt="Github Icon" className='inline-block max-h-7' />
            <span>See the code</span>
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
