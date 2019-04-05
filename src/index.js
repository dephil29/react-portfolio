// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// components
import Header from './components/Header';
import Main from './components/Main';
//style
import './index.css';

ReactDOM.render(
  <BrowserRouter >
    <div className="thewholething">
      <Header />
      <Main />
    </div>
  </BrowserRouter>,document.getElementById('root')
);
