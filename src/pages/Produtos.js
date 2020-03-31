import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Infos from '../components/Infos/Infos';

import { Container } from '../styles/produtos';

import imgTampas from '../images/tomadas.png';

export default function Produtos() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Produtos - Eletromax - Tubos e Conexões</title>
        <meta name="description" content="Nossos Produtos" />
      </Helmet>


      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 text-center">
              <h2>Nossos Produtos</h2>

              <div className="links links-red">
                  <Link to="/produtos/eletrodutos">Eletrodutos</Link>
                  <span>•</span>
                  <Link to="/produtos/tampas">Tampas</Link>
                  <span>•</span>
                  <Link to="/produtos/conduletes">Conduletes</Link>
                  <span>•</span>
                  <Link to="/produtos/curvas">Curvas</Link>
                  <span>•</span>
                  <Link to="/produtos/acessorios">Acessórios</Link>
              </div>
            </div>

            <div className="col-12">
              <div className="clear60"></div>
            </div>

           <Outlet />
          </div>
        </div>
      </div>

      <Infos />
    </Container>
  );
}
