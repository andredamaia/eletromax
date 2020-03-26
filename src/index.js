import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

ReactDOM.render(
    <Suspense fallback={<h1>Loading...</h1>}>
        <Router>
            <App />
        </Router>
    </Suspense>, 
    document.getElementById('root')
);