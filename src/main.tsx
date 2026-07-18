import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/setup';
import './app/globals.css';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
