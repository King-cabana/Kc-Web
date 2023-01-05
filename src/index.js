import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyles'
import { Provider } from "react-redux";
import store from "./store";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle/>
    <ProSidebarProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProSidebarProvider>
    </Provider>
  </React.StrictMode>
);

