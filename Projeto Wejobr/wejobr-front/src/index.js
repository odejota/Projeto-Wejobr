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
import Admin from './components/views/admin/Admin';
import VagasUpdtDel from './components/views/vagas/Vagas.updt.del';
import VagaInsert from './components/views/vagas/Vagas.insert';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/candidato' element={<Home />}></Route>
        <Route path='/vagas' element={<Vagas />}></Route>
        <Route path='/empresa' element={<Vagas />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        
        <Route path='/admin' element={<Admin />}></Route>
          <Route path='/candidato/cadastrarCandidato' element={<Admin />}></Route>
          <Route path='/editarCandidato' element={<Admin />}></Route>
          <Route path='/apagarCandidato' element={<Admin />}></Route>

          <Route path='/recrutador/cadastrarRecrutador' element={<Admin />}></Route>
          <Route path='/editarRecrutador' element={<Admin />}></Route>
          <Route path='/apagarRecrutador' element={<Admin />}></Route>

          <Route path='/vagas/cadastrarVaga' element={<VagaInsert />}></Route>
          <Route path='/gerenciarVagas' element={<VagasUpdtDel />}></Route>

          <Route path='/empresa/cadastrarEmpresa' element={<Admin />}></Route>
          <Route path='/editarEmpresa' element={<Admin />}></Route>
          <Route path='/apagarEmpresa' element={<Admin />}></Route>

      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);