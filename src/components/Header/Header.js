import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import './styles.css';

import logo from '../../images/logo.png';
import whatsapp1 from '../../images/whatsapp-1.svg';

function Header(){
    let location = useLocation();

    function usePageViews() {
        useEffect(() => {
            
        }, []);
    }

    usePageViews();

    return(
        <>
            <header className={ location.pathname === '/' ? "" : "page" }>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>

                        <div className="col-12 col-md-3 text-right infos-top">
                            <img src={whatsapp1} alt="" /> <span>(47) 98429-0311</span>
                            <p><span>contato@eletromaxconexoes.com.br</span></p>
                        </div>
                        
                        <div className="col-12 col-md-6">
                            <ul className="list-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/empresa">Empresa</Link></li>
                                <li><Link to="/representantes">Representantes</Link></li>
                                <li><Link to="/produtos">Produtos</Link></li>
                                <li><Link to="/contato">Contato</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
       
}   


export default Header;