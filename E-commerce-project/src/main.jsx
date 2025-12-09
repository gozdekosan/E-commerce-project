// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Redux Importları
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Store dosyanızın yolunu kontrol edin (.js veya .jsx)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🌟 Provider, tüm uygulamayı (BrowserRouter ve App'i) sarmalamalıdır */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);