import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_globals.scss';
import App from './App';
import "./lib/fetch";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

