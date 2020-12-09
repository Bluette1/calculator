import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import NavBar from './layouts/NavBar';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
