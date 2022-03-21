import { useRef } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function EmpInsert() {

    const nomeEmpresa = useRef();
    const cnpjEmpresa = useRef();
    const cepEmpresa = useRef();
    const ramoEmpresa = useRef();
    const telefoneEmpresa = useRef();
    const linkedinEmpresa = useRef();

    function sendData(event) {
        event.preventDefault()
        conn.post('/empresas/admin/cadastrarEmpresa', {
            nomeEmpresa: nomeEmpresa.current.value,
            cnpjEmpresa: cnpjEmpresa.current.value,
            cepEmpresa: cepEmpresa.current.value,
            ramoEmpresa: ramoEmpresa.current.value,
            telefoneEmpresa: telefoneEmpresa.current.value,
            linkedinEmpresa: linkedinEmpresa.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underAzul'>Cadastrar empresa</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <form className="bg-light row g-3 rounded p-3 form-floating" onSubmit={sendData}>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Oportunidades S/A' ref={nomeEmpresa} />
                        <label htmlFor="floatingInput">Nome da empresa</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número de CNPJ' ref={cnpjEmpresa}/>
                        <label htmlFor="floatingInput">CNPJ</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu CEP' ref={cepEmpresa}/>
                        <label htmlFor="floatingInput">CEP</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Qual o ramo de sua empresa?' ref={ramoEmpresa}/>
                        <label htmlFor="floatingInput">Ramo</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Número para contato com sua empresa' ref={telefoneEmpresa}/>
                        <label htmlFor="floatingInput">Telefone</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder='Como podemos achar sua empresa no LinkedIn?' ref={linkedinEmpresa}/>
                        <label htmlFor="floatingInput">LinkedIn</label>
                    </div>
                    <div className="form-check">
                        <input required className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
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