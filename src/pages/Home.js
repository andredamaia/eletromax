import React from 'react';

import '../styles/Home.css';

import curvas from './../images/curvas.png';
import zap1 from './../images/zap-1.svg';
import dollarsign from './../images/dollar-sign.svg';
import phonecall from './../images/phone-call.svg';
import tomadas from './../images/tomadas.png';
import bghomeright from './../images/bg-home-right.jpg';
import product1 from './../images/product-1.jpg';
import product2 from './../images/product-2.jpg';
import product3 from './../images/product-3.jpg';
import product4 from './../images/product-4.jpg';
import product5 from './../images/product-5.jpg';
import catalogo from './../images/catalogo.png';


function Home(){

    return(
        <>
            <div className="bg-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <h1>Mais qualidade<br/> 
                            para sua obra</h1>

                            <p>Queremos levar ao mercado produtos de qualidade e o bom atendimento aos nossos clientes, buscando a inovação e o diferencial que o mercado precisa</p>

                            <ul>

                                <li className="first"> <a href="#">Eletrodutos</a></li>

                                <li><a href="#">Tampas</a></li>

                                <li><a href="#">Conduletes</a></li>

                                <li><a href="#">Curvas</a></li>

                                <li className="last"><a href="#">Acessórios</a></li>
                                                            

                            </ul>
                        </div>

                        <div className="col-12 col-md-7 curvas">
                            <img src={curvas} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-box">
                <div className="container">
                    <div className="row">
                        <div className="boxes">
                            <div className="red-left">
                                <img src={zap1} alt=""  /> 
                                <span className="mini-title">Maior segurança</span>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        

                        
                            <div className="light-red">
                                <img src={dollarsign} alt=""   />
                                <span className="mini-title">Maior economia</span>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                       

                        
                            <div className="red-right">
                                <img src={phonecall} alt=""   />
                                <span className="mini-title">Faça um orçamento</span>
                                <p>Nossos representantes estão prontos para te atender da melhor forma.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                           <h2>Sobre nós</h2>

                           <p>Localizada em Joinville/SC, trazemos ao mercado toda linha de eletrodutos roscáveis, liso e com bolsa e toda linha de acessórios das cores: preto, cinza, branco e vermelho.</p>

                           <p className="box-red">Conheça mais</p>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="red-img">
                                <img className="img-tomadas" src={tomadas} alt=""  />
                            </div>
                        </div>

                        

                        <div className="col-12 red-list text-center ">
                            <h2>Nossos Produtos</h2>

                            <ul>

                                <li className="first"> <a href="#">Eletrodutos</a></li>

                                <li><a href="#">Tampas</a></li>

                                <li><a href="#">Conduletes</a></li>

                                <li><a href="#">Curvas</a></li>

                                <li className="last"><a href="#">Acessórios</a></li>
                                        
                            </ul>
                        </div>

                

                        <div className="produtos">
                            <img src={product1} alt=""  />
                            <img src={product2} alt=""  />
                            <img src={product3} alt=""  />
                            <img src={product4} alt=""  />
                            <img src={product5} alt=""  />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="linha-completa">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Veja a linha completa</h3>
                        </div>

                        <div className="col-12 col-md-8">
                            <div className="bg-red">
                                <h4 className="offset-md-4">Toda boa obra<br/>
                                começa com<br/>
                                produtos<br/>
                                Eletromax.</h4>
                            </div>

                            <div className="bg-red-2">
                                <span className="offset-md-4">Queremos levar ao mercado<br/>
                                produtos de qualidade e o bom<br/> 
                                atendimento aos nossos clientes,<br/>
                                buscando a inovação e o<br/>
                                diferencial que o mercado<br/>
                                precisa.</span>
                            </div>
                            
                            
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="catalogo">
                                <h2>Baixe nosso catálogo</h2>
                                <p>Gratuitamente</p>

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

