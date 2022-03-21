import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import conn from '../../server/conn';
import './Modal.vaga.css';

function ModalVaga(props) {

    const [vaga, setVaga] = useState([]);

    useEffect(() => {
        conn.get(`/vagas/${props.vaga.codVaga}`)
            .then((res) => {
                setVaga(res.data)
            })
            .catch((erro) => console.log(erro))
    });

    return (
        <>
            {vaga.map((vaga) => (
                <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered show={props.show} onHide={props.hClose}>

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
                                        <p>{props.vaga.cargoVaga}</p>
                                    </div>
                                    <div className="col-md-6 ml-auto">
                                        <h6>Código da vaga</h6>
                                        <p>{props.vaga.codVaga}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 ml-auto">
                                        <h6>Salário</h6>
                                        <p>R$ {props.vaga.salarioVaga}</p>
                                    </div>
                                    <div className="col-md-6 ml-auto">
                                        <h6>Localidade</h6>
                                        <p>{props.vaga.localidadeVaga}</p>
                                    </div>
                                </div>
                                <h6>Descrição da vaga</h6>
                                <p>{props.vaga.descricaoVaga}</p>
                                <div className="row">
                                    <div className="col-md-6 ml-auto">
                                        <h6>Nível de instrução</h6>
                                        <p>{props.vaga.nivelInstrucaoVaga}</p>
                                    </div>
                                    <div className="col-md-6 ml-auto">
                                        <h6>Vaga também direcionada à PCD?</h6>
                                        <p>{props.vaga.vagaPcd}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 ml-auto">
                                        <h6>Regime de contratação</h6>
                                        <p>{props.vaga.regimeContratacaoVaga}</p>
                                    </div>
                                    <div className="col-md-6 ml-auto">
                                        <h6>Empresa</h6>
                                        <p>{props.vaga.nomeEmpresaVaga}</p>
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
            ))}

        </>
    );
};

export default ModalVaga;