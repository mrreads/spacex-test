import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ParallaxProvider } from 'react-scroll-parallax';

import '@/assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
);