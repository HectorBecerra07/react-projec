import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from './components/CartContext'; // 👈 importá el contexto

// main.jsx (modificado)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
