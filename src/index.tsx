import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import NoPage from './pages/noPage';
import { pageUrl } from './config/name';
import Register from './pages/register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path={pageUrl.login} element={<Login/>} ></Route>
      <Route path={pageUrl.register} element={<Register/>} ></Route>
      <Route path={'/*'} element={<App/>} ></Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
