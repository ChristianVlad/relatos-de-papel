import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* C: envolver <App /> con <CartProvider> aquí */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);