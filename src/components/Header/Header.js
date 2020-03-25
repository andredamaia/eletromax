import React from 'react';

import './styles.css';

import logo from '../../images/logo.png';
import whatsapp1 from '../../images/whatsapp-1.svg';

function Header(){

    return(
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-2 offset-md-1">
                            <img src={logo} alt="" /> 
                        </div>

                        <div className="col-12 col-md-3 text-right ">
                            <img src={whatsapp1} alt="" /> <span>(47) 98429-0311</span>
                            <p>contato@eletromaxconexoes.com.br</p>
        
                        </div>
                        
                        <div className="col-12 col-md-6">
                            <ul>
                            <li>Home</li>

                            <li>Empresa</li>

                            <li>Representantes</li>

                            <li>Produtos</li>

                            <li>Contato</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
       
}   


export default Header;