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
import CandInsert from './components/views/candidato/Candidato.insert';
import CandDel from './components/views/candidato/Candidato.delete';
import Candidatos from './components/views/candidato/Candidato';
import CandUpdtList from './components/views/candidato/Candidato.updateList';
import Empresa from './components/views/empresa/Empresa';
import EmpInsert from './components/views/empresa/Empresa.insert';
import EmpDel from './components/views/empresa/Empresa.delete';
import EmpUpdtList from './components/views/empresa/Empresa.updateList';
import RecDel from './components/views/recrutador/Recrutador.delete';
import RecInsert from './components/views/recrutador/Recrutador.insert';
import RecUpdtList from './components/views/recrutador/Recrutador.updateList';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/candidato' element={<Candidatos />}></Route>
        <Route path='/vagas' element={<Vagas />}></Route>
        <Route path='/empresa' element={<Empresa />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        
        <Route path='/admin' element={<Admin />}></Route>
          <Route path='/candidato/cadastrarCandidato' element={<CandInsert />}></Route>
          <Route path='/editarCandidato' element={<CandUpdtList />}></Route>
          <Route path='/apagarCandidato' element={<CandDel />}></Route>

          <Route path='/recrutador/cadastrarRecrutador' element={<RecInsert />}></Route>
          <Route path='/editarRecrutador' element={<RecUpdtList />}></Route>
          <Route path='/apagarRecrutador' element={<RecDel />}></Route>

          <Route path='/vagas/cadastrarVaga' element={<VagaInsert />}></Route>
          <Route path='/gerenciarVagas' element={<VagasUpdtDel />}></Route>

          <Route path='/empresa/cadastrarEmpresa' element={<EmpInsert />}></Route>
          <Route path='/editarEmpresa' element={<EmpUpdtList />}></Route>
          <Route path='/apagarEmpresa' element={<EmpDel />}></Route>

      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);