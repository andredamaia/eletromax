import React from 'react';

import './styles.css';

import logo from '../../images/logo-footer.png';
import facebook from '../../images/facebook.svg';

import { ReactComponent as Whats } from '../../images/whatsapp-1.svg';
import { ReactComponent as Phone } from '../../images/phone-call.svg';


function Footer(){

    return(
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img src={logo} alt=""/> 
                        </div>

                        <div className="col-12 col-md-3">
                            <p>Rodovia BR - 280, 1881<br/> 
                            Porto grande - Araquari/SC<br/>  
                            ​89.245-000</p> 
                        </div>

                        <div className="col-12 col-md-3 midias">
                            <p>
                                <Whats /> <span>(47) 98429-0311</span><br /> 
                                <Phone /> <span>(47) 3463-0479</span><br /> 
                                contato@eletromaxconexoes.com.br
                            </p>
                        </div>

                        <div className="col-12">
                            <div className="copyright">
                                <div className="row">
                                    <div className="col-10 col-md-9 text-left">
                                        <p>Copyright © 2020 - Eletromax - Tubos e Conexões - Todos os direitos reservados</p>
                                    </div>

                                    <div className="col-2 col-md-3 text-right">
                                        <a href="/" target="_blank"><img src={facebook} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;