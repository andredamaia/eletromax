import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";



import { Container } from '../styles/produtos';

import imgTampas from '../images/tomadas.png';

export default function Curvas() {
  return (
    <Container>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Curvas - Eletromax - Tubos e Conexões</title>
        <meta name="description" content="Curvas Lisa Com ou Sem Bolsa, Curvas Roscáveis" />
      </Helmet>


      <div className="content">
        <div className="container">
          <div className="row">

            <div className="col-12 col-md-5">
              <img src={imgTampas} style={{ maxWidth: '100%' }} alt="" />
            </div>

            <div className="col-12 col-md-6">
              <p className="text-highlight">Curvas Lisa Com ou Sem Bolsa</p>

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
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>1.1/4"</td>
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>1.1/2"</td>
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>2"</td>
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>1 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>2.1/2"</td>
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>1 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>3"</td>
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>1 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>4"</td>
                    <td>Curva lisa ou C/ bolsa Cinza, Branco, Vermelho e Preto</td>
                    <td style={{ textAlign: 'center' }}>1 Un.</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-highlight">Curvas Roscáveis</p>

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
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>3/4"</td>
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>1"</td>
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>20 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>1.1/4"</td>
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>1.1/2"</td>
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>5 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>2"</td>
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>1 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>2.1/2"</td>
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>1 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>3"</td>
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>1 Un.</td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: 'center' }}>4"</td>
                    <td>Curva Roscavel 90° ou 180° Preto</td>
                    <td style={{ textAlign: 'center' }}>1 Un.</td>
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
