import { Modal } from 'react-bootstrap';
import './Modal.login.css';

function ModalLogin(props) {
    return (
        <>
            <Modal {...props} size="" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false} show={props.show} onHide={props.hClose}>

                <div className="modalLogin modal-content">
                    <div className="modal-body modalLogin">
                        <h5 className="modal-title">Login</h5>
                        <select className="form-control col-sm-8 bg-light text-center">
                            <option selected disabled className='text-muted'>Selecione...</option>
                            <option>Sou candidato</option>
                            <option>Sou recrutador/empresa</option>
                        </select>
                        <input type="login" className="form-control col-sm-8 col-form-label bg-light" id="inputEmail3" placeholder="E-mail" />
                        <input type="password" className="form-control col-sm-8 bg-light" id="inputPassword3" placeholder="Senha" />
                        <button type="submit" className="btn btnEntrar">Entrar</button>
                        <button type="button" className="btn btnFechar" onClick={props.hClose}>Fechar</button>
                    </div>
                </div>

            </Modal>

        </>
    );
};

export default ModalLogin;