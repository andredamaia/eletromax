import React from 'react';

import './styles.css';

import logo from '../../images/logo.png';
import whatsapp1 from '../../images/whatsapp-1.svg';
import phonecall from '../../images/phone-call.svg';


function Footer(){

    return(
        <>
            <div className="bg-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src={logo} alt=""/> 
                        </div>

                        <div className="col-12 col-md-3">
                            <p>Rodovia BR - 280, 1881<br/> 
                            Porto grande - Araquari/SC<br/>  
                            ​89.245-000</p> 
                        </div>

                        <div className="col-12 col-md-3 midias">
                            <img src={whatsapp1} alt=""/> <span>(47) 98429-0311</span><br/> 
                            <img src={phonecall} alt=""/> <span>(47) 3463-0479</span>
                            <p>contato@eletromaxconexoes.com.br</p>
                        </div>

                        <div className="col-12 col-md-12 copyright text-left">
                            <p>Copyright © 2020 - Eletromax - Tubos e Conexões - Todos os direitos reservados</p>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Footer;