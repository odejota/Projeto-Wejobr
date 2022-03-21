import { useRef } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function RecInsert() {

    const empresaRecrutador = useRef();
    const codEmpresa = useRef();
    const nomeRecrutador = useRef();
    const cargoRecrutador = useRef();
    const departamentoRecrutador = useRef();
    const emailRecrutador = useRef();
    const telRecrutador = useRef();
    const outroContatoRecrutador = useRef();
    const senhaRecrutador = useRef();

    function sendData(event) {
        event.preventDefault()
        conn.post('/recrutadores/admin/cadastrarRecrutador', {
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
        <section className="container my-4" id="vagasSection1">

            <h2 className='underAzul'>Cadastrar recrutador</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <form className="bg-light row g-3 rounded p-3 form-floating" onSubmit={sendData}>
                    <div className="col-md-12 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu Nome Aqui' ref={nomeRecrutador}/>
                        <label for="floatingInput">Nome do recrutador</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="email" className="form-control" id="floatingInput" placeholder='Seu endereço de e-mail na empresa' ref={emailRecrutador}/>
                        <label for="floatingInput">E-mail comercial</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número telefone na empresa' ref={telRecrutador}/>
                        <label for="floatingInput">Telefone comercial</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número de telefone celular' ref={outroContatoRecrutador}/>
                        <label for="floatingInput">Telefone celular</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="password" className="form-control" id="floatingInput" placeholder='Crie uma senha forte' ref={senhaRecrutador}/>
                        <label for="floatingInput">Senha</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="password" className="form-control" id="floatingInput" placeholder='Confirme a senha criada' ref={senhaRecrutador}/>
                        <label for="floatingInput">Confirmar senha</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Informe o nome da empresa que representa' ref={empresaRecrutador}/>
                        <label for="floatingInput">Empresa representada</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='ID da empresa no Wejobr' ref={codEmpresa}/>
                        <label for="floatingInput">Código identificador da empresa</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Em qual depto. você trabalha?' ref={departamentoRecrutador}/>
                        <label for="floatingInput">Departamento</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Qual cargo você ocupa na empresa?' ref={cargoRecrutador}/>
                        <label for="floatingInput">Cargo</label>
                    </div>
                    <div className="form-check">
                        <input required className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Li e aceito os presentes Termos e Condições de Uso
                        </label>
                    </div>
                    <div className="col-12">
                        <button type='submit' className='mx-1 btn btnCadastrar'>Cadastrar recrutador</button>
                        <Link to='/admin' type='button' className='mx-1 btn btnFechar'>Voltar</Link>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default RecInsert;