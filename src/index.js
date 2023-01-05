import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyles'
import { Provider } from "react-redux";
import store from "./store";
import GoToTop from "./GoToTop";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle/>
    <BrowserRouter>
    <GoToTop /> 
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

