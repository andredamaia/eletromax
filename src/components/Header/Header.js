import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Menu from '../Menu/Menu';

import './styles.css';

import logo from '../../images/logo.png';
import whatsapp1 from '../../images/whatsapp-1.svg';
import nav from '../../images/nav.png';

function Header(){
    let location = useLocation();

    function usePageViews() {
        useEffect(() => {
            
        }, []);
    }

    usePageViews();

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });

    const [disabled, setDisabled] = useState(false);

    const handleMenu = () => {
        disableMenu();

        if(state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true){
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    }

    // Ativa e desativa o botão do menu
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    }

    return(
        <>
            <header className={ location.pathname === '/' ? "" : "page" }>
                <button 
                    disabled={disabled} 
                    onClick={handleMenu}
                    className="button-nav d-md-none"
                >
                    <img src={nav} alt="" />
                </button>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Link to="/"><img src={logo} alt="" /></Link>
                        </div>

                        <div className="col-12 col-md-3 text-right infos-top d-none d-md-block">
                            <img src={whatsapp1} alt="" /> <span>(47) 98429-0311</span>
                            <p><span>contato@eletromaxconexoes.com.br</span></p>
                        </div>
                        
                        <div className="col-12 col-md-6 d-none d-md-block">
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

            <Menu state={state} disabled={disabled} />
        </>
    )
       
}   


export default Header;