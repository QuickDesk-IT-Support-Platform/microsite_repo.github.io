import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Objetivos from './pages/Objetivos.tsx';
import Metodologia from './pages/Metodologia.tsx';
import Documentacao from './pages/Documentacao.tsx';
import Equipe from './pages/Equipe.tsx';
import Resultados from './pages/Resultados.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/objetivos" element={<Objetivos />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/documentacao" element={<Documentacao />} />
      </Routes>
    </BrowserRouter>
)
