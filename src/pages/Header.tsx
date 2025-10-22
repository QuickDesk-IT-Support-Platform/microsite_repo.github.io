import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
{/*import ToggleDarkMode from '../shared/components/ToogleDarkMode';*/}
import QuickDeskLogo from "../assets/quickdesk-icon.png";
import DropDownMilestones from '../shared/components/DropDownMilestones';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    // If we're already on the root page, scroll with header offset
    if (location.pathname === '/') {
      const section = document.getElementById(id);
      if (section) {
        const header = document.getElementById('site-header');
        const headerHeight = header ? header.offsetHeight : 0;
        const y = section.getBoundingClientRect().top + window.scrollY - headerHeight - 8; // small gap
        window.scrollTo({ top: y, behavior: 'smooth' });
        setOpen(false);
      }
      return;
    }

    // If on another route, navigate to root and pass the target section
    navigate('/', { state: { scrollTo: id } });
    setOpen(false);
  };

  return (
    <section id="site-header" className='flex fixed w-full bg-white p-4 flex-row items-center justify-between border-b border-b-gray-300  dark:bg-black/50 dark:text-white dark:border-b-gray-100/20 dark:border-b-0 z-50 '>
      {/* Ícone do menu hambúrguer */}
      <div className="sm:hidden flex items-center ">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded focus:outline-none"
          aria-label="Abrir menu"
        >
          {/* SVG do ícone hambúrguer */}
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
            <rect y="4" width="20" height="2" rx="1"/>
            <rect y="9" width="20" height="2" rx="1"/>
            <rect y="14" width="20" height="2" rx="1"/>
          </svg>
        </button>
      </div>

      <div className='flex items-center space-x-2 hover:cursor-pointer' onClick={handleScroll('home')}>
        <img src={QuickDeskLogo} alt="QuickDesk Logo" className='h-10 ' />
        <span className='font-bold text-'>QuickDesk</span>
      </div>

      <nav className='hidden sm:flex justify-around w-full  sm:items-center sm:justify-around' >
        <ul className='flex flex-row space-x-10 justify-center w-full '>
          <li><a href="#calendar" onClick={handleScroll('calendar')} className='font-bold'>Calendário</a></li>
          <li><a href="#equipe" onClick={handleScroll('equipe')} className='font-bold'>Equipe</a></li>
          <li><a href="#documentacao" onClick={handleScroll('documentacao')} className='font-bold'>Documentação</a></li>
          <DropDownMilestones />
          {/*<ToggleDarkMode />*/}
        </ul>
      </nav>

      {/* Dropdown em telas pequenas */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#121212] shadow-lg sm:hidden z-50">
          <ul className='flex flex-col items-center space-y-4 py-4'>
            <li><a href="#calendar" onClick={handleScroll('calendar')} className='font-bold'>Calendário</a></li>
            <li><a href="#equipe" onClick={handleScroll('equipe')} className='font-bold'>Equipe</a></li>
            <li><a href="#documentacao" onClick={handleScroll('documentacao')} className='font-bold'>Documentação</a></li>
            <DropDownMilestones />

          {/*<ToggleDarkMode />*/}
          </ul>
        </div>
      )}
    </section>
  )
}