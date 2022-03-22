import { useRef } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import './Vagas.css';

function VagaInsert() {

    const cargoVaga = useRef();
    const descricaoVaga = useRef();
    const salarioVaga = useRef();
    const nivelInstrucaoVaga = useRef();
    const localidadeVaga = useRef();
    const regimeContratacaoVaga = useRef();
    const vagaPcd = useRef();
    const vagaDestaque = useRef();
    const nomeEmpresaVaga = useRef();

    function sendData(event) {
        event.preventDefault()
        conn.post('/vagas/admin/cadastrarVaga', {
            cargoVaga: cargoVaga.current.value,
            descricaoVaga: descricaoVaga.current.value,
            salarioVaga: salarioVaga.current.value,
            nivelInstrucaoVaga: nivelInstrucaoVaga.current.value,
            localidadeVaga: localidadeVaga.current.value,
            regimeContratacaoVaga: regimeContratacaoVaga.current.value,
            vagaPcd: vagaPcd.current.value,
            vagaDestaque: vagaDestaque.current.value,            
            nomeEmpresaVaga: nomeEmpresaVaga.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underVerde'>Cadastrar vaga</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <form className="bg-light row g-3 rounded p-3" onSubmit={sendData}>
                    <div className="col-md-6">
                        <label className="form-label">Cargo</label>
                        <input required type="text" className="form-control" placeholder='Auxiliar de Estoque' ref={cargoVaga}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Código da vaga</label>
                        <input disabled type="text" className="form-control" placeholder='Criado automaticamente'/>
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Salário</label>
                        <div className="input-group">
                            <div className="input-group-text">R$</div>
                            <input required type="text" className="form-control" placeholder='2.235' ref={salarioVaga}/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <label className="form-label">Localidade</label>
                        <input required type="text" className="form-control" placeholder='Belo Horizonte - MG' ref={localidadeVaga}/>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Descrição da vaga</label>
                        <textarea required type="text" className="form-control" placeholder='' ref={descricaoVaga}/>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Nível de instrução</label>
                        <select required className="form-select" ref={nivelInstrucaoVaga}>
                            <option className='text-muted'>Escolha...</option>
                            <option value={"Fundamental"}>Fundamental</option>
                            <option value={"Médio"}>Médio</option>
                            <option value={"Superior"}>Superior</option>
                            <option value={"Técnico"}>Técnico</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Vaga também direcionada à PCD?</label>
                        <select required className="form-select" ref={vagaPcd}>
                            <option className='text-muted'>Escolha...</option>
                            <option value={"Sim"}>Sim</option>
                            <option value={"Não"}>Não</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Deseja destacar essa oportunidade?</label>
                        <select required className="form-select" ref={vagaDestaque}>
                            <option className='text-muted'>Escolha...</option>
                            <option value={"Sim"}>Sim</option>
                            <option value={"Não"}>Não</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Regime de contratação</label>
                        <input required type="text" className="form-control" placeholder="CLT, PJ, Freelance..." ref={regimeContratacaoVaga}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Empresa</label>
                        <input  type="text" className="form-control" placeholder="Nome da empresa empregadora" ref={nomeEmpresaVaga}/>
                    </div>
                    <div className="col-12">
                        <button type='submit' className='mx-1 btn btnCadastrar'>Cadastrar vaga</button>
                        <Link to='/admin' type='button' className='mx-1 btn btnFechar'>Voltar</Link>
                    </div>
                </form>

            </div>

        </section>
    );
};

export default VagaInsert;