import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/Router';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import BaseNavbar from './components/NavBar';
import {InformProvider} from './contexts/InformProvider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>   
      <BaseNavbar />
        <BrowserRouter>
          <InformProvider>
            <div className="container"> 
             <Router/>
            </div>
          </InformProvider>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
