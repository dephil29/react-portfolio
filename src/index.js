import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  </BrowserRouter>,document.getElementById('root')
);