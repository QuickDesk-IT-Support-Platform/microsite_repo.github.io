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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
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
