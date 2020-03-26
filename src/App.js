import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Home = lazy(() => import('./pages/Home'));
const Empresa = lazy(() => import('./pages/Empresa'));
const Representantes = lazy(() => import('./pages/Representantes'));
const Contato = lazy(() => import('./pages/Contato'));

function App() {
  return(
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/representantes" element={<Representantes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer/>
    </>
  )
  
}

export default App;