import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Auth0 configuration with your specific credentials
const auth0Config = {
  domain: 'cic-demo-monish-chaganti.cic-demo-platform.auth0app.com',
  clientId: 'AhpT0EauJuZALuumctlu4pdrejA0r7Ui',
  authorizationParams: {
    redirect_uri: window.location.origin,
    scope: 'openid profile email'
  }
};

root.render(
  <React.StrictMode>
    <Auth0Provider {...auth0Config}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
); 