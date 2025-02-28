import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Si tienes estilos globales
import App from './App.jsx';  // El archivo JSX se importa sin problemas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
