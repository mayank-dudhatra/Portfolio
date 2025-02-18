import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Portfolio from './assets/Component/Portfolio.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
     
     <Route path='/' element={<Portfolio />} />

   </Routes>
  </BrowserRouter>
);