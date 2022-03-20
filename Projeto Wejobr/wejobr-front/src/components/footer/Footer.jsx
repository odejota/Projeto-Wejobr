import './Footer.css';
import logoFooter from '../../img/SVG Logos/Wejobr-Logo-full_preto.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalLogin from '../modal/Modal.login';

function Footer() {

    const [show, setShow] = useState(false);
    const hClose = () => setShow(false);
    const hShow = () => setShow(true);

    return (

        <footer className="container-fluid py-4 d-flex justify-content-center footer1 bottom-0">
            <div className="container row">
                <div className="col-12 col-md col-lg-3 d-flex flex-column justify-content-center text-center">
                    <Link to='/'><img className="mb-2" src={logoFooter} alt="" style={{ width: "8vh" }}/></Link>
                    <small className="d-block mb-3 text-muted">© 2022. Todos os direitos reservados.</small>
                    <small className="d-block mb-3 text-muted">Desenvolvido por Squad 22</small>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                    <h5>Site</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to='/' className="text-muted">Home</Link></li>
                        <li className="text-muted pointer" onClick={hShow}>Candidato</li>
                        {show ? <ModalLogin show={show} hClose={hClose}/> : <></>}
                        <li><Link to='/empresa' className="text-muted">Empresas</Link></li>
                        <li><Link to='/vagas' className="text-muted">Vagas</Link></li>
                        <li><Link to='/sobre' className="text-muted">Sobre</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                    <h5>Candidato</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to='/candidato/cadastrarCandidato' className="text-muted">Cadastrar</Link></li>
                        <li className="text-muted pointer" onClick={hShow}>Entrar</li>
                        {show ? <ModalLogin show={show} hClose={hClose}/> : <></>}
                        <li><Link to='/candidato/cadastrarCandidato' className="text-muted">Cadastrar Currículo</Link></li>
                        <li><Link to='/vagas' className="text-muted">Vagas</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                    <h5>Empresas</h5>
                    <ul className="list-unstyled text-small">
                        <li><Link to='/empresa' className="text-muted">Área da Empresa</Link></li>
                        <li><Link to='/empresa/cadastrarEmpresa' className="text-muted">Cadastrar Empresa</Link></li>
                        <li><Link to='/recrutador/cadastrarRecrutador' className="text-muted">Cadastrar Recrutador</Link></li>
                        <li><Link to='/vagas/cadastrarVaga' className="text-muted">Cadastrar Vagas</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 col-lg-3">
                    <h5>Contato</h5>
                    <ul className="list-unstyled text-small">
                        <li className="text-muted">Telefone: (99) 99999-9999</li>
                        <li className="text-muted">E-mail: contato@wejobr.com</li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;