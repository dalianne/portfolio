import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import {BrowserRouter as Router} from "react-router-dom"
import './index.scss';
import Appli from './composants/Appli';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Router>
        <Appli />
      </Router>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('racine')
);