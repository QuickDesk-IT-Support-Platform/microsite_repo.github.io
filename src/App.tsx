// ...existing code...
import './App.css'
import Header from './pages/Header'
import Sobre from './pages/Sobre'

import Equipe from './pages/Equipe'
import Documentacao from './pages/Documentacao'
import Home from './pages/Home'
import Footer from './shared/components/Footer'
import Calendar from './pages/Calendar'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function App() {
  const location = useLocation();

  useEffect(() => {
    // If navigated here with a scroll target, scroll after mount
    type NavState = { scrollTo?: string } | null
    const state = (location.state as NavState) ?? null;
    if (state && state.scrollTo) {
      const id = state.scrollTo;
      // small timeout to ensure DOM rendered
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const header = document.getElementById('site-header');
          const headerHeight = header ? header.offsetHeight : 0;
          const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
      // Clear the state so repeated navigations don't re-trigger
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <Home />
        <Sobre />
        <Calendar />
        <Equipe />
        <Documentacao />
    

      </main>
      <Footer/>

    </div>

  )
}

export default App
