import React from 'react'
import ToggleDarkMode from '../shared/components/ToogleDarkMode';
export default function Header() {
  // Função para scroll suave até a section
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='flex fixed w-full bg-white   border-b-gray-200 p-4 border-b  flex-row items-center justify-between dark:bg-black dark:text-white dark:border-b-gray-100/20 '>
      <nav className='justify-around w-full'>
        <ul className='flex flex-row space-x-20 justify-center w-full'>
            <li><a href="#sobre" onClick={handleScroll('sobre')}>Sobre</a></li>
            <li><a href="#objetivos" onClick={handleScroll('objetivos')}>Objetivos</a></li>
            <li><a href="#metodologia" onClick={handleScroll('metodologia')}>Metodologia</a></li>
            <li><a href="#equipe" onClick={handleScroll('equipe')}>Equipe</a></li>
            <li><a href="#documentacao" onClick={handleScroll('documentacao')}>Documentação</a></li>
            <li><a href="#resultados" onClick={handleScroll('resultados')}>Resultados</a></li>
            <ToggleDarkMode />
        </ul>
      </nav>
    </section>
  )
}

