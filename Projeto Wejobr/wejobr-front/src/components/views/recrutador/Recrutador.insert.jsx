import { useRef } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function RecInsert() {

    const cidade = useRef();
    const pais = useRef();
    const continente = useRef();
    const aeroportos_IATA = useRef();

    function sendData(event) {
        event.preventDefault()
        conn.post('/recrutador/cadastrarRecrutador', {
            cidade: cidade.current.value,
            pais: pais.current.value,
            continente: continente.current.value,
            aeroportos_IATA: aeroportos_IATA.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underAzul'>Cadastrar recrutador</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <form className="bg-light row g-3 rounded p-3 form-floating" onSubmit={sendData}>
                    <div className="col-md-12 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu Nome Aqui' />
                        <label for="floatingInput">Nome do recrutador</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="email" className="form-control" id="floatingInput" placeholder='Seu endereço de e-mail na empresa' />
                        <label for="floatingInput">E-mail comercial</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número telefone na empresa' />
                        <label for="floatingInput">Telefone comercial</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número de telefone celular' />
                        <label for="floatingInput">Telefone celular</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="password" className="form-control" id="floatingInput" placeholder='Crie uma senha forte' />
                        <label for="floatingInput">Senha</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="password" className="form-control" id="floatingInput" placeholder='Confirme a senha criada' />
                        <label for="floatingInput">Confirmar senha</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Informe o nome da empresa que representa' />
                        <label for="floatingInput">Empresa representada</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='ID da empresa no Wejobr' />
                        <label for="floatingInput">Código identificador da empresa</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Em qual depto. você trabalha?' />
                        <label for="floatingInput">Departamento</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Qual cargo você ocupa na empresa?' />
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