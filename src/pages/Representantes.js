import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../styles/representantes';

import { ReactComponent as Whats } from '../images/whatsapp-1.svg';
import { ReactComponent as Phone } from '../images/phone-call.svg';

import bgRepresentantes from '../images/map.jpg';

export default function Empresa() {
  return (
    <Container>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Representantes</h1>
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
              <Link to="/representantes">Representantes</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <h2>Solicite já a visita de um de nossos representantes!</h2>

              <p>Envie sua solicitaçao por algum dos contatos abaixo e teremos o maior prazer em atendê-lo!​</p>

              <div className="box-representantes">
                  <p>
                    <Whats /> <span>(47) 98429-0311</span><br /> 
                    <Phone /> <span>(47) 3463-0479</span><br /> 
                    contato@eletromaxconexoes.com.br
                  </p>
              </div>
            </div>

            <div className="col-12 col-md-7">
              <img src={bgRepresentantes} className="bg-representantes" style={{ marginTop: -80 }} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
