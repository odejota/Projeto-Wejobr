// import { useEffect, useState } from 'react';
// import conn from '../../server/conn';
// import './Card.vaga.css';
// import { Modal } from 'react-bootstrap';


// function CardVagaDstq() {

//     const [show, setShow] = useState(false);
//     const hClose = () => { setShow(false) };
//     const hShow = () => { setShow(true) };

//     const [vaga, setVaga] = useState([]);

//     useEffect(() => {
//         conn.get(`/vagas/${}`)
//             .then((res) => {
//                 setVaga(res.data)
//             })
//             .catch((erro) => console.log(erro))
//     }, []);

//     return (
//         <>
//             {vaga.map((vaga) => (
//                 <div className="col" key={vaga.codVaga}>
//                     <div className="card h-100 vagaCard">
//                         <div className="card-header">
//                             <h6 className="mx-1 card-title">{vaga.cargoVaga}</h6>
//                         </div>
//                         <div className="card-body">
//                             <ul className="card-text">
//                                 <li>Nível: {vaga.nivelInstrucaoVaga}</li>
//                                 <li>Salário: R$ {vaga.salarioVaga}</li>
//                                 <li>Localidade: {vaga.localidadeVaga}</li>
//                                 <li>Código da vaga: {vaga.codVaga}</li>
//                             </ul>
//                             <div className="d-grid gap-2">
//                                 <button type="button" className="btn btn-sm btnVaga" onClick={hShow}>Ver detalhes da vaga</button>
//                             </div>
//                         </div>
//                     </div>


//                     <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={hClose}>

//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">Detalhes da vaga</h5>
//                                 <i className="bi bi-x-circle fs-5 float-end" onClick={hClose}></i>
//                             </div>
//                             <div className="modal-body">
//                                 <div className="container-fluid">
//                                     <div className="row">
//                                         <div className="col-md-6 ml-auto">
//                                             <h6>Cargo</h6>
//                                             <p>{vaga.cargoVaga}</p>
//                                         </div>
//                                         <div className="col-md-6 ml-auto">
//                                             <h6>Código da vaga</h6>
//                                             <p>{vaga.codVaga}</p>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-md-6 ml-auto">
//                                             <h6>Salário</h6>
//                                             <p>R$ {vaga.salarioVaga}</p>
//                                         </div>
//                                         <div className="col-md-6 ml-auto">
//                                             <h6>Localidade</h6>
//                                             <p>{vaga.localidadeVaga}</p>
//                                         </div>
//                                     </div>
//                                     <h6>Descrição da vaga</h6>
//                                     <p>{vaga.descricaoVaga}</p>
//                                     <div className="row">
//                                         <div className="col-md-6 ml-auto">
//                                             <h6>Nível de instrução</h6>
//                                             <p>{vaga.nivelInstrucaoVaga}</p>
//                                         </div>
//                                         <div className="col-md-6 ml-auto">
//                                             <h6>Vaga também direcionada à PCD?</h6>
//                                             <p>{vaga.vagaPcd}</p>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-md-6 ml-auto">
//                                             <h6>Regime de contratação</h6>
//                                             <p>{vaga.regimeContratacaoVaga}</p>
//                                         </div>
//                                         <div className="col-md-6 ml-auto">
//                                             <h6>Empresa</h6>
//                                             <p>{vaga.nomeEmpresaVaga}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btnFechar" data-dismiss="modal" onClick={hClose}>Fechar</button>
//                                 <button type="button" className="btn btnVaga">Candidatar</button>
//                             </div>
//                         </div>
//                     </Modal>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default CardVagaDstq;