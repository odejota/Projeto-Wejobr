import { useRef } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function EmpInsert() {

    const cidade = useRef();
    const pais = useRef();
    const continente = useRef();
    const aeroportos_IATA = useRef();

    function sendData(event) {
        event.preventDefault()
        conn.post('/empresa/cadastrarEmpresa', {
            cidade: cidade.current.value,
            pais: pais.current.value,
            continente: continente.current.value,
            aeroportos_IATA: aeroportos_IATA.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underAzul'>Cadastrar empresa</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <form className="bg-light row g-3 rounded p-3 form-floating" onSubmit={sendData}>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu Nome Aqui' />
                        <label for="floatingInput">Nome da empresa</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número de CNPJ' />
                        <label for="floatingInput">CNPJ</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu CEP' />
                        <label for="floatingInput">CEP</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Qual o ramo de sua empresa?' />
                        <label for="floatingInput">Ramo</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Número para contato com sua empresa' />
                        <label for="floatingInput">Telefone</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder='Como podemos achar sua empresa no LinkedIn?' />
                        <label for="floatingInput">LinkedIn</label>
                    </div>
                    <div className="form-check">
                        <input required className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Li e aceito os presentes Termos e Condições de Uso
                        </label>
                    </div>
                    <div className="col-12">
                        <button type='submit' className='mx-1 btn btnCadastrar'>Cadastrar empresa</button>
                        <Link to='/admin' type='button' className='mx-1 btn btnFechar'>Voltar</Link>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default EmpInsert;