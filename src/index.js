import React, { Suspense } from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Loading from './components/Loading/Loading';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Suspense fallback={<Loading />}>
    <Router>
        <ScrollToTop />
        <App />
    </Router>
</Suspense>, rootElement);
} else {
  render(<Suspense fallback={<Loading />}>
    <Router>
        <ScrollToTop />
        <App />
    </Router>
</Suspense>, rootElement);
}