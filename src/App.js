import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Home = lazy(() => import('./pages/Home'));
const Empresa = lazy(() => import('./pages/Empresa'));
const Representantes = lazy(() => import('./pages/Representantes'));
const Produtos = lazy(() => import('./pages/Produtos'));
const Contato = lazy(() => import('./pages/Contato'));

const Eletrodutos = lazy(() => import('./pages/Eletrodutos'));
const Tampas = lazy(() => import('./pages/Tampas'));
const Conduletes = lazy(() => import('./pages/Conduletes'));
const Curvas = lazy(() => import('./pages/Curvas'));
const Acessorios = lazy(() => import('./pages/Acessorios'));

function App() {
  return(
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/representantes" element={<Representantes />} />
        <Route path="/produtos" element={<Produtos />}>
          <Route path="eletrodutos" element={<Eletrodutos />} />
          <Route path="tampas" element={<Tampas />} />
          <Route path="conduletes" element={<Conduletes />} />
          <Route path="curvas" element={<Curvas />} />
          <Route path="acessorios" element={<Acessorios />} />
        </Route>
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer/>
    </>
  )
  
}

export default App;