import { Modal } from 'react-bootstrap';
import './Modal.vaga.css';

function ModalVaga(props) {
    return (
        <>
            <Modal {...props} size="" aria-labelledby="contained-modal-title-vcenter" centered show={props.show} onHide={props.hClose}>

                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Detalhes da vaga</h5>
                        <i className="bi bi-x-circle fs-5 float-end" onClick={props.hClose}></i>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 ml-auto">
                                    <h6>Cargo</h6>
                                    <p>Auxiliar de Estoque</p>
                                </div>
                                <div className="col-md-6 ml-auto">
                                    <h6>Código da vaga</h6>
                                    <p>456</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ml-auto">
                                    <h6>Salário</h6>
                                    <p>R$ 2.200</p>
                                </div>
                                <div className="col-md-6 ml-auto">
                                    <h6>Localidade</h6>
                                    <p>Belo Horizonte - MG</p>
                                </div>
                            </div>
                            <h6>Descrição da vaga</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit fringilla hendrerit. Nullam condimentum lorem pulvinar urna euismod elementum. Donec et ante vel urna semper.</p>
                            <div className="row">
                                <div className="col-md-6 ml-auto">
                                    <h6>Nível de instrução</h6>
                                    <p>Médio</p>
                                </div>
                                <div className="col-md-6 ml-auto">
                                    <h6>Vaga também direcionada à PCD?</h6>
                                    <p>Sim</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ml-auto">
                                    <h6>Regime de contratação</h6>
                                    <p>CLT</p>
                                </div>
                                <div className="col-md-6 ml-auto">
                                    <h6>ID da empresa</h6>
                                    <p>123</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btnFechar" data-dismiss="modal" onClick={props.hClose}>Fechar</button>
                        <button type="button" className="btn btnVaga">Candidatar</button>
                    </div>
                </div>

            </Modal>
        </>
    );
};

export default ModalVaga;