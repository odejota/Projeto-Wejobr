import { useRef } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import conn from '../../server/conn';
import '../views/vagas/Vagas.css';

function EmpUpdate(props) {

    const nomeEmpresa = useRef();
    const cnpjEmpresa = useRef();
    const cepEmpresa = useRef();
    const ramoEmpresa = useRef();
    const telefoneEmpresa = useRef();
    const linkedinEmpresa = useRef();

    function updateData(event) {
        event.preventDefault()
        conn.put('/empresas/admin/editarEmpresa', {
            idEmpresa: props.empresa.idEmpresa,
            nomeEmpresa: nomeEmpresa.current.value,
            cnpjEmpresa: cnpjEmpresa.current.value,
            cepEmpresa: cepEmpresa.current.value,
            ramoEmpresa: ramoEmpresa.current.value,
            telefoneEmpresa: telefoneEmpresa.current.value,
            linkedinEmpresa: linkedinEmpresa.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <>
            <Offcanvas id="vagasSection1" show={props.show} onHide={props.hClose} closeButton>
                <Offcanvas.Body>
                    <h2 className='underAmarela'>Editar cadastro do empresa</h2>
                    <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                        <form className="bg-light row g-3 rounded p-3 form-floating" onSubmit={updateData}>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Oportunidades S/A' ref={nomeEmpresa} defaultValue={props.empresa.nomeEmpresa} />
                                <label for="floatingInput">Nome da empresa</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número de CNPJ' ref={cnpjEmpresa} defaultValue={props.empresa.cnpjEmpresa} />
                                <label for="floatingInput">CNPJ</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Seu CEP' ref={cepEmpresa} defaultValue={props.empresa.cepEmpresa} />
                                <label for="floatingInput">CEP</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Qual o ramo de sua empresa?' ref={ramoEmpresa} defaultValue={props.empresa.ramoEmpresa} />
                                <label for="floatingInput">Ramo</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Número para contato com sua empresa' ref={telefoneEmpresa} defaultValue={props.empresa.telefoneEmpresa} />
                                <label for="floatingInput">Telefone</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input type="text" className="form-control" id="floatingInput" placeholder='Como podemos achar sua empresa no LinkedIn?' ref={linkedinEmpresa} defaultValue={props.empresa.linkedinEmpresa} />
                                <label for="floatingInput">LinkedIn</label>
                            </div>
                            <div className="form-check">
                                <input required className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Li e aceito os presentes Termos e Condições de Uso
                                </label>
                            </div>
                            <div className="col-12">
                                <button type='submit' className='mx-1 btn btnEntrar'>Confirmar alterações</button>
                                <Link to='/admin' type='button' className='mx-1 btn btnFechar'>Voltar</Link>
                            </div>
                        </form>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default EmpUpdate;