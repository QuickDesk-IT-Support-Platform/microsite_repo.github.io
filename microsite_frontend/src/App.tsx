import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header'
import Sobre from './pages/Sobre'
import Objetivos from './pages/Objetivos'
import Metodologia from './pages/Metodologia'
import Resultados from './pages/Resultados'
import Equipe from './pages/Equipe'
import Documentacao from './pages/Documentacao'
import Home from './pages/Home'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <Home />
        <Sobre />
        <Objetivos />
        <Metodologia />
        <Resultados />
        <Equipe />
        <Documentacao />

      </main>
    </div>

  )
}

export default App
