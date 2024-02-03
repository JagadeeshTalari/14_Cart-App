<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppProvider from './Context/AppProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContext from "./GlobalContext/AppContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
>>>>>>> origin/main
  </React.StrictMode>
);
