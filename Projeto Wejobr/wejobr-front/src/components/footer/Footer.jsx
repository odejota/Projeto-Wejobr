import './Footer.css';
import logoFooter from '../../img/SVG Logos/Wejobr-Logo-full_preto.svg';
import { Link } from 'react-router-dom';

function Footer() {
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
                        <li><a className="text-muted">Candidato</a></li>
                        <li><a className="text-muted">Empresas</a></li>
                        <li><a className="text-muted">Vagas</a></li>
                        <li><a className="text-muted">Sobre</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                    <h5>Candidato</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted">Cadastrar</a></li>
                        <li><a className="text-muted">Entrar</a></li>
                        <li><a className="text-muted">Cadastrar Currículo</a></li>
                        <li><a className="text-muted">Vagas</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                    <h5>Empresas</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted">Área da Empresa</a></li>
                        <li><a className="text-muted">Cadastrar Empresa</a></li>
                        <li><a className="text-muted">Cadastrar Recrutador</a></li>
                        <li><a className="text-muted">Cadastrar Vagas</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 col-lg-3">
                    <h5>Contato</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted">Telefone: (99) 99999-9999</a></li>
                        <li><a className="text-muted">E-mail: contato@wejobr.com</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;