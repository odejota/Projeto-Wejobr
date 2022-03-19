import { Link } from 'react-router-dom';
import Admin from '../admin/Admin';
import './Vagas.css';

function VagaInsert() {
    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underVerde'>Cadastrar vaga</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <form className="bg-light row g-3 rounded p-3">
                    <div className="col-md-6">
                        <label className="form-label">Cargo</label>
                        <input required type="text" className="form-control" placeholder='Auxiliar de Estoque' />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Código da vaga</label>
                        <input required type="text" className="form-control" placeholder='123' />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Salário</label>
                        <div className="input-group">
                            <div className="input-group-text">R$</div>
                            <input required type="text" className="form-control" placeholder='2.235' />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <label className="form-label">Localidade</label>
                        <input required type="text" className="form-control" placeholder='Belo Horizonte - MG' />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Descrição da vaga</label>
                        <textarea required type="text" className="form-control" placeholder='' />
                    </div>
                    <div className="col-auto">
                        <label className="form-label">Nível de instrução</label>
                        <select required className="form-select" >
                            <option className='text-muted'>Escolha...</option>
                            <option value={"Fundamental"}>Fundamental</option>
                            <option value={"Médio"}>Médio</option>
                            <option value={"Superior"}>Superior</option>
                            <option value={"Técnico"}>Técnico</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <label className="form-label">Vaga também direcionada à PCD?</label>
                        <select required className="form-select" >
                            <option className='text-muted'>Escolha...</option>
                            <option value={"Sim"}>Sim</option>
                            <option value={"Não"}>Não</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <label className="form-label">Regime de contratação</label>
                        <input required type="text" className="form-control" placeholder="CLT, PJ, Freelance..." />
                    </div>
                    <div className="col-auto">
                        <label className="form-label">ID da empresa</label>
                        <input required type="text" className="form-control" placeholder="321" />
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