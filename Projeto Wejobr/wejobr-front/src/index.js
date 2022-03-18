import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/views/home/Home';
import Sobre from './components/views/sobre/Sobre';
import Vagas from './components/views/vagas/Vagas.index';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/vagas' element={<Vagas />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);