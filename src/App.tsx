// ...existing code...
import './App.css'
import Header from './pages/Header'
import Sobre from './pages/Sobre'
//import Objetivos from './pages/Objetivos'
//import Metodologia from './pages/Metodologia'
//import Resultados from './pages/Resultados'
import Equipe from './pages/Equipe'
import Documentacao from './pages/Documentacao'
import Home from './pages/Home'
import Footer from './shared/components/Footer'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <Home />
        <Sobre />
      
        <Equipe />
        <Documentacao />
        {/*
          <Objetivos />
        <Metodologia />
        <Resultados />




         */}

      </main>
      <Footer/>

    </div>

  )
}

export default App
