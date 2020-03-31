import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { Container } from '../styles/contato';

import { ReactComponent as Map } from '../images/map-pin.svg';
import { ReactComponent as Phone } from '../images/phone-call.svg';

export default function Contato() {
  return (
    <Container>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Contato - Eletromax - Tubos e Conexões</title>
        <meta name="description" content="Deixe sua mensagem" />
      </Helmet>


      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Deixe sua mensagem</h2>
            </div>

            <div className="col-12 col-md-7">
              <form action="">
                <input type="text" placeholder="Nome completo" required />

                <input type="email" placeholder="E-mail" required />

                <input type="text" placeholder="Telefone" />

                <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem" required></textarea>

                <button className="button-red">Enviar mensagem</button>
              </form>
            </div>

            <div className="col-12 col-md-5">
              <div className="light-red">
                <div>
                    <Map />
                </div>
                <div>
                    <span className="mini-title">Endereço</span>
                    <p>
                      Rodovia BR - 280, 1881 <br />
                      Porto grande - Araquari/SC <br />
                      ​89.245-000
                    </p>
                </div>
              </div> 

              <div className="light-red" style={{ backgroundColor: '#AA0E15' }}>
                <div>
                    <Phone />
                </div>
                <div>
                    <span className="mini-title">Contato</span>
                    <p>
                      (47) 98429-0311 (Whatsapp) <br />
                      (47) 3463-0479 (Fixo) <br />
                      contato@eletromaxconexoes.com.br
                    </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
