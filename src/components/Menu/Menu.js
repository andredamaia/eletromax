import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import $ from 'jquery';

import './styles.css';

const Hamburger = ({ state }) => {
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let line5 = useRef(null);

    useEffect(() => {
        if(state.clicked === false) {
            // Fecha o menu
            // menu.style.display = 'none'
            
            gsap.to([revealMenu, revealMenuBackground], {
                duration: .8,
                height: 0,
                ease: 'power3.inOut',
                stagger: {
                    amount: .07
                }
            });

            gsap.to(menu, {
                duration: 1,
                css: {display: 'none'}
            });

        } else if(state.clicked === true || (state.clicked === true && state.initial === null)) {
            // Abre o menu
            // menu.style.display = 'block'

            gsap.to(menu, {
                duration: 0,
                css: {display: 'block'}
            });

            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%",
            });

            staggerReveal(revealMenuBackground, revealMenu);
            staggerText(line1, line2, line3, line4, line5);
        }
    }, [state]);


    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: .8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: .01
            }
        });
    };

    const staggerText = (node1, node2, node3, node4, node5) => {
        gsap.from([node1, node2, node3, node4, node5], {
            duration: .8,
            y: 100,
            delay: .1,
            ease: 'power3.inOut',
            stagger: {
                amount: .3
            }
        });
    };

    const handleHover = e => {
        gsap.to(e.target, {
            duration: .3,
            y: 3,
            skewX: 4,
            ease: 'power3.inOut'
        });
    }

    const handleHoverExit = e => {
        gsap.to(e.target, {
            duration: .3,
            y: -3,
            skewX: 0,
            ease: 'power3.inOut'
        });
    }

    const moveScreen = e => {
        $('.button-nav').trigger("click");

        gsap.to([revealMenu, revealMenuBackground], {
            duration: .8,
            height: 0,
            ease: 'power3.inOut',
            stagger: {
                amount: .07
            }
        });

        gsap.to(menu, {
            duration: 1,
            css: {display: 'none'}
        });
    }

    return (
        <div ref={el => (menu = el)} className="hamburger-menu">
            <div 
                ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"
            ></div>

            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div className="content">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li>
                                        <Link
                                            ref={el => (line1 = el)} 
                                            to="/"
                                            link="home"
                                            onClick={e => moveScreen(e)}
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link 
                                            ref={el => (line2 = el)} 
                                            to="/empresa"
                                            link="empresa"
                                            onClick={e => moveScreen(e)}
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Empresa
                                        </Link>
                                    </li>

                                    <li>
                                        <Link 
                                            ref={el => (line3 = el)} 
                                            to="/representantes"
                                            link="representantes"
                                            onClick={e => moveScreen(e)}
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Representantes
                                        </Link>
                                    </li>

                                    <li>
                                        <Link 
                                            ref={el => (line4 = el)} 
                                            to="/produtos"
                                            link="produtos"
                                            onClick={e => moveScreen(e)}
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Produtos
                                        </Link>
                                    </li>

                                    <li>
                                        <Link 
                                            ref={el => (line5 = el)} 
                                            to="/contato"
                                            link="contato"
                                            onClick={e => moveScreen(e)}
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Contato
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;