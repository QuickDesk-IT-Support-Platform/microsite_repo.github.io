import React from 'react'

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
    <section className='flex fixed w-full bg-white p-4 border border-gray-200  flex-row items-center justify-between'>
      <h1>Projeto Final MicroSite</h1>
      <nav className='justify-around w-full'>
        <ul className='flex flex-row space-x-20 justify-center w-full'>
            <li><a href="#sobre" onClick={handleScroll('sobre')}>Sobre</a></li>
            <li><a href="#objetivos" onClick={handleScroll('objetivos')}>Objetivos</a></li>
            <li><a href="#metodologia" onClick={handleScroll('metodologia')}>Metodologia</a></li>
            <li><a href="#resultados" onClick={handleScroll('resultados')}>Resultados</a></li>
            <li><a href="#equipe" onClick={handleScroll('equipe')}>Equipe</a></li>
            <li><a href="#documentacao" onClick={handleScroll('documentacao')}>Documentação</a></li>
            <button className='bg-black text-white p-1   rounded-lg'>Mudar Tema</button>
        </ul>
      </nav>
    </section>
  )
}

