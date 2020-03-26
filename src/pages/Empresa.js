import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../styles/empresa';

import imgCatalog from '../images/img-catalog.png';

export default function Empresa() {
  return (
    <Container>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Sobre nós</h1>
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
              <Link to="/empresa">Empresa</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="content empresa">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Nossa história</h2>
            </div>

            <div className="col-12 col-md-6">
              <p>Aliquam luctus lacus sit amet purus faucibus dictum. In convallis porttitor dapibus. Nullam fringilla accumsan lectus sed maximus. Curabitur id magna blandit, bibendum velit ut, ultrices justo. Proin a rutrum velit. Nullam sapien velit, facilisis sit amet neque sed, posuere fringilla ligula. </p>
            </div>

            <div className="col-12 col-md-6">
              <p>Nullam a urna tempus, porttitor libero quis, vestibulum purus. Cras ac pellentesque leo. Pellentesque quis sagittis arcu. In sit amet sapien maximus, porta justo et, euismod eros. Vestibulum a massa tellus.</p>
            </div>

            <div className="col-12">
              <div className="clear60"></div>
            </div>

            <div className="col-12 col-md-5">
              <p className="text-highlight">Toda boa obra começa com produtos Eletromax.</p>
            </div>

            <div className="col-12 col-md-7 d-flex align-items-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et lectus sit amet massa imperdiet semper. Aliquam eget fringilla lorem. Phasellus sit amet iaculis enim. Mauris fringilla egestas arcu, sit amet finibus orci viverra sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="col-12 d-none d-md-block">
              <div className="clear60"></div>
            </div>

            <div className="col-12 d-none d-md-block">
              <a href="/"><img src={imgCatalog} style={{ maxWidth: '100%' }} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
