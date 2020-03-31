import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { Container } from '../styles/produtos';

import imgTampas from '../images/tomadas.png';

export default function Acessorios() {
  return (
    <Container>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Acessórios - Eletromax - Tubos e Conexões</title>
        <meta name="description" content="Abraçadeiras, Adaptadores, Joelho Com Janela, Luva Lisa" />
      </Helmet>

      
      <div className="content">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-5">
              <img src={imgTampas} style={{ maxWidth: '100%' }} alt="" />
            </div>

            <div className="col-12 col-md-6">
              <p className="text-highlight">Abraçadeiras</p>

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
                    <td>Abraçadeira Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>50 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td>Abraçadeira Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>50 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td>Abraçadeira Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-highlight">Adaptadores</p>

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
                    <td> Adaptador Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>50 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td> Adaptador Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>50 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td> Adaptador Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-highlight">Joelho Com Janela</p>

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
                    <td> Joelho com janela Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td> Joelho com janela Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td> Joelho com janela Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-highlight">Luva Lisa</p>

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
                    <td> Luva lisa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>50 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td> Luva lisa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>50 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td> Luva lisa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
}
