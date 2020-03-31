import React from 'react';
import {Helmet} from "react-helmet";

import '../styles/home.css';

import Infos from '../components/Infos/Infos';

import curvas from './../images/curvas.png';
import zap1 from './../images/zap-1.svg';
import dollarsign from './../images/dollar-sign.svg';
import phonecall from './../images/phone-call.svg';
import tomadas from './../images/tomadas.png';
// import bghomeright from './../images/bg-home-right.jpg';
import product1 from './../images/product-1.jpg';
import product2 from './../images/product-2.jpg';
import product3 from './../images/product-3.jpg';
import product4 from './../images/product-4.jpg';
import product5 from './../images/product-5.jpg';
import catalogo from './../images/catalogo.png';


function Home(){

    return(
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Eletromax - Tubos e Conexões</title>
                <meta name="description" content="Mais qualidade para sua obra" />
            </Helmet>

            <div className="bg-banner">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-5">
                            <h1>Mais qualidade para sua obra</h1>

                            <p>Queremos levar ao mercado produtos de qualidade e o bom atendimento aos nossos clientes, buscando a inovação e o diferencial que o mercado precisa</p>

                            <div className="links">
                                <a href="#">Eletrodutos</a>
                                <span>•</span>
                                <a href="#">Tampas</a>
                                <span>•</span>
                                <a href="#">Conduletes</a>
                                <span>•</span>
                                <a href="#">Curvas</a>
                                <span>•</span>
                                <a href="#">Acessórios</a>
                            </div>
                        </div>

                        <div className="col-12 col-md-7 curvas">
                            <img src={curvas} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Infos />

            <div className="bg-white">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-4">
                           <h2>Sobre nós</h2>

                           <p>Localizada em Joinville/SC, trazemos ao mercado toda linha de eletrodutos roscáveis, liso e com bolsa e toda linha de acessórios das cores: preto, cinza, branco e vermelho.</p>

                           <a href="/empresa" className="button-red">Conheça mais</a>
                        </div>

                        <div className="col-12 col-md-4 d-none d-md-block">
                            <div className="red-img">
                                <img className="img-tomadas" src={tomadas} alt=""  />
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="list-produtos">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3 text-center">
                            <h2>Nossos Produtos</h2>

                            <div className="links links-red">
                                <a href="#">Eletrodutos</a>
                                <span>•</span>
                                <a href="#">Tampas</a>
                                <span>•</span>
                                <a href="#">Conduletes</a>
                                <span>•</span>
                                <a href="#">Curvas</a>
                                <span>•</span>
                                <a href="#">Acessórios</a>
                            </div>
                        </div>

                        <div className="produtos">
                            <img src={product1} alt=""  />
                            <img src={product2} alt=""  />
                            <img src={product3} alt=""  />
                            <img src={product4} alt=""  />
                            <img src={product5} alt=""  />
                        </div>

                        <div className="col-12 text-center">
                            <a href="/produtos" className="button-more">Veja a linha completa</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="linha-completa">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                        </div>

                        <div className="col-12 col-md-8">
                            <div className="bg-red">
                                <div className="row col-12 col-md-4 offset-md-6">
                                    <h4>Toda boa obra começa com produtos Eletromax.</h4>

                                    <p>Queremos levar ao mercado produtos de qualidade e o bom atendimento aos nossos clientes, buscando a inovação e o diferencial que o mercado precisa.</p>
                                </div>  
                            </div>  
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="catalogo">
                                <h2>Baixe nosso catálogo</h2>
                                <span>Gratuitamente</span>

                                <img src={catalogo} alt=""  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )    
}   


export default Home;

