import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";



import { Container } from '../styles/produtos';

import imgTampas from '../images/tomadas.png';

export default function Eletrodutos() {
  return (
    <Container>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Eletrodutos - Eletromax - Tubos e Conexões</title>
        <meta name="description" content="Eletrodutos Lisos, Eletrodutos Roscável, Eletrodutos Com Bolsa" />
      </Helmet>

      
      <div className="content">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-5">
              <img src={imgTampas} style={{ maxWidth: '100%' }} alt="" />
            </div>

            <div className="col-12 col-md-6">
              <p className="text-highlight">Eletrodutos Lisos</p>

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
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>1.1/4"</td>
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>1.1/2"</td>
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>2"</td>
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>2.1/2"</td>
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>3 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>3"</td>
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>3 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>4"</td>
                    <td>Eletroduto Liso Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>3 Un.</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-highlight">Eletrodutos Roscável</p>

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
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1.1/4"</td>
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1.1/2"</td>
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>2"</td>
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>2.1/2"</td>
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>3"</td>
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>4"</td>
                    <td>Eletroduto Roscável Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-highlight">Eletrodutos Com Bolsa</p>

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
                    <td style={{ textAlign: 'center' }}>20mm</td>
                    <td>Eletroduto com bolsa Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>25mm</td>
                    <td>Eletroduto com bolsa Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>32mm</td>
                    <td>Eletroduto com bolsa Preto</td>
                    <td style={{ textAlign: 'center' }}>10 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>40mm</td>
                    <td>Eletroduto com bolsa Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>50mm</td>
                    <td>Eletroduto com bolsa Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>60mm</td>
                    <td>Eletroduto com bolsa Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>
                  {/*<tr>
                    <td style={{ textAlign: 'center' }}>80mm</td>
                    <td>Eletroduto com bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>3 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>100mm</td>
                    <td>Eletroduto com bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>3 Un.</td>
                  </tr>*/}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      
    </Container>
  );
}
