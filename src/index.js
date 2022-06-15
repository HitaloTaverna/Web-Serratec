import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate }  from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Estado from './components/Estado'
import Aulas from './pages/Aulas';
import Exercicios from './pages/Exercicios';
import Exibir from './pages/Exibir';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <h1>Exercicíos de React</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/aulas' element={<Aulas />}/>
        <Route path='/estado' element={<Estado />}/>
        <Route path='/exercicios' element={<Exercicios />}/>
        <Route path='/exibir' element={<Exibir />}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


