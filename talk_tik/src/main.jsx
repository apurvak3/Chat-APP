import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import { CssBaseline } from '@mui/material'; // Corrected import, removed CSSBaseline
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
