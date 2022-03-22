import { Link } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";

import logo from '../../img/SVG Logos/Wejobr-Logo-horizontal-azul.svg';
import BR from '../../img/Icons/icon.brasil.png';
import ES from '../../img/Icons/icon.espanha.png';
import EN from '../../img/Icons/icon.reino-unido.png';
import ModalLogin from "../modal/Modal.login";

function Navbar() {

    const [show, setShow] = useState(false);
    const hClose = () => setShow(false);
    const hShow = () => setShow(true);

    return (

        <nav className="navbar navbar-expand-lg navbarcolor">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand mx-1"><img src={logo} alt="Wejobr Logo" style={{ width: "22vh" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="bi bi-list-nested"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mr-auto mb-2 mb-lg-0 mx-5">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='' className="nav-link active" onClick={hShow}>Candidato</Link>
                            {show ? <ModalLogin show={show} hClose={hClose} /> : <></>}
                        </li>
                        <li className="nav-item">
                            <Link to='/vagas' className="nav-link active">Vagas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/empresa' className="nav-link active">Empresas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sobre' className="nav-link active">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin' className="nav-link">Admin</Link>
                        </li>
                    </ul>
                    <form className="d-flex align-items-center">
                        <div className="dropdown">
                            <Link to='' className="dropdown-toggle mx-1" id="idiomaDropdown" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-globe"></i> Idioma</Link>
                            <ul className="dropdown-menu" id="idiomaDropStyle" aria-labelledby="idiomaDropdown">
                                <li className="dropdown-item"><img src={BR} alt="BR" /> Português</li>
                                <li className="dropdown-item"><img src={EN} alt="EN" /> Inglês</li>
                                <li className="dropdown-item"><img src={ES} alt="ES" /> Espanhol</li>
                            </ul>
                        </div>
                        <button className="btn btnEntrar mx-1" type="button" onClick={hShow}>Entrar</button>
                        {show ? <ModalLogin show={show} hClose={hClose} /> : <></>}
                        <Link to='/candidato/cadastrarCandidato' className="btn btnCadastrar mx-1" type="button">Cadastrar</Link>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;