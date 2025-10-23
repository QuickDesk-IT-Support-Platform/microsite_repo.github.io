import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Milestones from './pages/MilesTones/Inception.tsx';
import Documentacao from './pages/Documentacao.tsx';
import Equipe from './pages/Equipe.tsx';
import Calendario from './pages/Calendar.tsx';
// import Elaboration from './pages/MilesTones/Elaboration.tsx';
// import Construction from './pages/MilesTones/Construction.tsx';
// import Transition from './pages/MilesTones/Transition.tsx';
import Inception from './pages/MilesTones/Inception.tsx';
import NotFound from './pages/NotFound';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/microsite_repo.github.io'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Milestones" element={<Milestones />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/documentacao" element={<Documentacao />} />
        {/* <Route path="/milestones/construction" element={<Construction />} />
        <Route path="/milestones/elaboration" element={<Elaboration />} />
        <Route path="/milestones/transition" element={<Transition />} /> */}
        <Route path="/milestones/inception" element={<Inception />} />
        {/* 404 - Not Found route (catch-all) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
