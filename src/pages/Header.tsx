import React, { useState } from 'react'
import ToggleDarkMode from '../shared/components/ToogleDarkMode';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Função para scroll suave até a section
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false); // Fecha o dropdown ao clicar
    }
  };

  return (
    <section className='flex fixed w-full bg-gray-500/10 p-4 flex-row items-center justify-between dark:bg-black/50 dark:text-white dark:border-b-gray-100/20 z-50'>
      {/* Ícone do menu hambúrguer */}
      <div className="sm:hidden flex items-center">
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
      {/* Navbar normal em telas médias/grandes */}
      <nav className='hidden sm:flex justify-around w-full'>
        <ul className='flex flex-row space-x-10 justify-center w-full '>
          <li><a href="#sobre" onClick={handleScroll('sobre')} className='font-bold'>Sobre</a></li>
          <li><a href="#objetivos" onClick={handleScroll('objetivos')} className='font-bold'>Objetivos</a></li>
          <li><a href="#metodologia" onClick={handleScroll('metodologia')} className='font-bold'>Metodologia</a></li>
          <li><a href="#equipe" onClick={handleScroll('equipe')} className='font-bold'>Equipe</a></li>
          <li><a href="#documentacao" onClick={handleScroll('documentacao')} className='font-bold'>Documentação</a></li>
          <li><a href="#resultados" onClick={handleScroll('resultados')} className='font-bold'>Resultados</a></li>
          <ToggleDarkMode />
        </ul>
      </nav>
      {/* Dropdown em telas pequenas */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#121212] shadow-lg sm:hidden z-50">
          <ul className='flex flex-col items-center space-y-4 py-4'>
            <li><a href="#sobre" onClick={handleScroll('sobre')} className='font-bold'>Sobre</a></li>
            <li><a href="#objetivos" onClick={handleScroll('objetivos')} className='font-bold'>Objetivos</a></li>
            <li><a href="#metodologia" onClick={handleScroll('metodologia')} className='font-bold'>Metodologia</a></li>
            <li><a href="#equipe" onClick={handleScroll('equipe')} className='font-bold'>Equipe</a></li>
            <li><a href="#documentacao" onClick={handleScroll('documentacao')} className='font-bold'>Documentação</a></li>
            <li><a href="#resultados" onClick={handleScroll('resultados')} className='font-bold'>Resultados</a></li>
            <ToggleDarkMode />
          </ul>
        </div>
      )}
    </section>
  )
}