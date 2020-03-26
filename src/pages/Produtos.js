import React from 'react';
import { Link } from 'react-router-dom';

import Infos from '../components/Infos/Infos';

import { Container } from '../styles/produtos';

import imgTampas from '../images/tomadas.png';

export default function Empresa() {
  return (
    <Container>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Sobre nós</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link to="/">Home</Link>
              <span>•</span>
              <Link to="/produtos">Produtos</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 text-center">
              <h2>Nossos Produtos</h2>

              <div className="links links-red">
                  <a href="#">Eletrodutos</a>
                  <span>•</span>
                  <a href="#">Tampas</a>
                  <span>•</span>
                  <a href="#">Conduletes</a>
                  <span>•</span>
                  <a href="#">Curvas</a>
                  <span>•</span>
                  <a href="#">Acessórios</a>
              </div>
            </div>

            <div className="col-12">
              <div className="clear60"></div>
            </div>

            <div className="col-12 col-md-5">
              <img src={imgTampas} style={{ maxWidth: '100%' }} alt="" />
            </div>

            <div className="col-12 col-md-6">
              <p className="text-highlight">Linha elétrica Tampa para condulete</p>

              <p>Aliquam luctus lacus sit amet purus faucibus dictum. In convallis porttitor dapibus. Nullam fringilla accumsan lectus sed maximus. Curabitur id magna blandit, bibendum velit ut, ultrices justo. Proin a rutrum velit. Nullam sapien velit, facilisis sit amet neque sed, posuere fringilla ligula. </p>

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'center' }}>Medida</th>
                    <th>Produto</th>
                    <th style={{ textAlign: 'center' }}>Qtd. pacote</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1/2"</td>
                    <td>Tampa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td>Tampa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td>Tampa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Infos />
    </Container>
  );
}
