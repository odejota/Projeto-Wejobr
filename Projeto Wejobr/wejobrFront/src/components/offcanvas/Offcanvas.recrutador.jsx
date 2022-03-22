import { useRef } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import conn from '../../server/conn';
import '../views/vagas/Vagas.css';

function RecUpdate(props) {

    const empresaRecrutador = useRef();
    const codEmpresa = useRef();
    const nomeRecrutador = useRef();
    const cargoRecrutador = useRef();
    const departamentoRecrutador = useRef();
    const emailRecrutador = useRef();
    const telRecrutador = useRef();
    const outroContatoRecrutador = useRef();
    const senhaRecrutador = useRef();

    function updateData(event) {
        event.preventDefault()
        conn.put('/recrutadores/admin/editarRecrutador', {
            idRecrutador: props.recrutador.idRecrutador,
            empresaRecrutador: empresaRecrutador.current.value,
            codEmpresa: codEmpresa.current.value,
            nomeRecrutador: nomeRecrutador.current.value,
            cargoRecrutador: cargoRecrutador.current.value,
            departamentoRecrutador: departamentoRecrutador.current.value,
            emailRecrutador: emailRecrutador.current.value,
            telRecrutador: telRecrutador.current.value,
            outroContatoRecrutador: outroContatoRecrutador.current.value,
            senhaRecrutador: senhaRecrutador.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <>
            <Offcanvas id="vagasSection1" show={props.show} onHide={props.hClose} closeButton>
                <Offcanvas.Body>
                    <h2 className='underAmarela'>Editar cadastro do recrutador</h2>
                    <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                        <form className="bg-light row g-3 rounded p-3 form-floating" onSubmit={updateData}>
                            <div className="col-md-12 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Seu Nome Aqui' ref={nomeRecrutador} defaultValue={props.recrutador.nomeRecrutador} />
                                <label for="floatingInput">Nome do recrutador</label>
                            </div>
                            <div className="col-md-12 form-floating">
                                <input required type="email" className="form-control" id="floatingInput" placeholder='Seu endereço de e-mail na empresa' ref={emailRecrutador} defaultValue={props.recrutador.emailRecrutador} />
                                <label for="floatingInput">E-mail comercial</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número telefone na empresa' ref={telRecrutador} defaultValue={props.recrutador.telRecrutador} />
                                <label for="floatingInput">Telefone comercial</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número de telefone celular' ref={outroContatoRecrutador} defaultValue={props.recrutador.outroContatoRecrutador} />
                                <label for="floatingInput">Telefone celular</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="password" className="form-control" id="floatingInput" placeholder='Crie uma senha forte' ref={senhaRecrutador} defaultValue={props.recrutador.senhaRecrutador} />
                                <label for="floatingInput">Senha</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="password" className="form-control" id="floatingInput" placeholder='Confirme a senha criada' ref={senhaRecrutador} defaultValue={props.recrutador.senhaRecrutador} />
                                <label for="floatingInput">Confirmar senha</label>
                            </div>
                            <div className="col-md-12 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Informe o nome da empresa que representa' ref={empresaRecrutador} defaultValue={props.recrutador.empresaRecrutador} />
                                <label for="floatingInput">Empresa representada</label>
                            </div>
                            <div className="col-md-12 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='ID da empresa no Wejobr' ref={codEmpresa} defaultValue={props.recrutador.codEmpresa} />
                                <label for="floatingInput">Código identificador da empresa</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Em qual depto. você trabalha?' ref={departamentoRecrutador} defaultValue={props.recrutador.departamentoRecrutador} />
                                <label for="floatingInput">Departamento</label>
                            </div>
                            <div className="col-md-6 form-floating">
                                <input required type="text" className="form-control" id="floatingInput" placeholder='Qual cargo você ocupa na empresa?' ref={cargoRecrutador} defaultValue={props.recrutador.cargoRecrutador} />
                                <label for="floatingInput">Cargo</label>
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

export default RecUpdate;