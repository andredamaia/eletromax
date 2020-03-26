import React from 'react';

import { Container } from './styles';

import zap1 from '../../images/zap-1.svg';
import dollarsign from '../../images/dollar-sign.svg';
import phonecall from '../../images/phone-call.svg';

export default function Header() {
  return (
    <Container>
        <div className="bg-box">
            <div className="container">
                <div className="row">
                    <div className="boxes">
                        <div className="red-left">
                            <div>
                                <img src={zap1} alt=""  /> 
                            </div>
                            <div>
                                <span className="mini-title">Maior segurança</span>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    
                        <div className="light-red">
                            <div>
                                <img src={dollarsign} alt="" />
                            </div>
                            <div>
                                <span className="mini-title">Maior economia</span>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div> 

                        <div className="red-right">
                            <div>
                                <img src={phonecall} alt="" />
                            </div>
                            <div>
                                <span className="mini-title">Faça um orçamento</span>
                                <p>Nossos representantes estão prontos para te atender da melhor forma.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
}
