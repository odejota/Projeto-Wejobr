import { useRef } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function CandInsert() {

    const nomeCandidato = useRef();
    const nascimentoCandidato = useRef();
    const estadoCivilCandidato = useRef();
    const nacionalidadeCandidato = useRef();
    const codIdentificacao = useRef();
    const emailCandidato = useRef();
    const cargo1Candidato = useRef();
    const cargo2Candidato = useRef();
    const cargo3Candidato = useRef();
    const senhaCandidato = useRef();
    const idiomaCandidato = useRef();
    const outroIdiomaCandidato = useRef();

    function sendData(event) {
        event.preventDefault()
        conn.post('/candidatos/admin/cadastrarCandidato', {
            nomeCandidato: nomeCandidato.current.value,
            nascimentoCandidato: nascimentoCandidato.current.value,
            estadoCivilCandidato: estadoCivilCandidato.current.value,
            nacionalidadeCandidato: nacionalidadeCandidato.current.value,
            codIdentificacao: codIdentificacao.current.value,
            emailCandidato: emailCandidato.current.value,
            cargo1Candidato: cargo1Candidato.current.value,
            cargo2Candidato: cargo2Candidato.current.value,
            cargo3Candidato: cargo3Candidato.current.value,
            senhaCandidato: senhaCandidato.current.value,
            idiomaCandidato: idiomaCandidato.current.value,
            outroIdiomaCandidato: outroIdiomaCandidato.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underVerde'>Cadastrar candidato</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <form className="bg-light row g-3 rounded p-3 form-floating" onSubmit={sendData}>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu Nome Aqui' ref={nomeCandidato}/>
                        <label htmlFor="floatingInput">Nome completo</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número de documento no Brasil' ref={codIdentificacao}/>
                        <label htmlFor="floatingInput">Doc. de identificação no Brasil</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="date" className="form-control" id="floatingInput" placeholder='Sua data de nascimento' ref={nascimentoCandidato}/>
                        <label htmlFor="floatingInput">Data de nascimento</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='De qual país você é?' ref={nacionalidadeCandidato}/>
                        <label htmlFor="floatingInput">Nacionalidade</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <select required className="form-select" id="floatingSelect" aria-label="Floating label select example" ref={estadoCivilCandidato}>
                            <option defaultValue>Qual o seu estado civil?</option>
                            <option>Solteiro</option>
                            <option>Casado</option>
                            <option>Divorciado</option>
                            <option>Viúvo</option>
                            <option>União estável</option>
                        </select>
                        <label htmlFor="floatingSelect">Estado civil</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <select required className="form-select" id="floatingSelect" aria-label="Floating label select example" ref={idiomaCandidato}>
                            <option defaultValue>Qual o seu idioma principal?</option>
                            <option>Português</option>
                            <option>Inglês</option>
                            <option>Espanhol</option>
                            <option>Italiano</option>
                            <option>Ucraniano</option>
                            <option>Outro</option>
                        </select>
                        <label htmlFor="floatingSelect">Idioma principal</label>
                    </div>
                    {/* <div className="col-md-4 form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Qual o seu idioma secundário?</option>
                            <option>Português</option>
                            <option>Inglês</option>
                            <option>Espanhol</option>
                            <option>Italiano</option>
                            <option>Ucraniano</option>
                            <option>Outro</option>
                        </select>
                        <label htmlFor="floatingSelect">Idioma secundário (não obrigatório)</label>
                    </div> */}
                    <div className="col-md-6 form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder='Idioma que não esteja na lista' ref={outroIdiomaCandidato}/>
                        <label htmlFor="floatingInput">Idioma não listado? Digite aqui.</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Pretensão de cargo principal' ref={cargo1Candidato}/>
                        <label htmlFor="floatingInput">Pretensão de cargo principal</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Pretensão de cargo 2' ref={cargo2Candidato}/>
                        <label htmlFor="floatingInput">Pretensão de cargo 2</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Pretensão de cargo 3' ref={cargo3Candidato}/>
                        <label htmlFor="floatingInput">Pretensão de cargo 3</label>
                    </div>
                    <div className="col-md-12 form-floating">
                        <input required type="email" className="form-control" id="floatingInput" placeholder='Seu melhor e-mail' ref={emailCandidato}/>
                        <label htmlFor="floatingInput">Seu melhor e-mail</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="password" className="form-control" id="floatingInput" placeholder='Crie uma senha forte' ref={senhaCandidato}/>
                        <label htmlFor="floatingInput">Crie uma senha forte</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="password" className="form-control" id="floatingInput" placeholder='Confirme a senha' ref={senhaCandidato}/>
                        <label htmlFor="floatingInput">Confirme a senha</label>
                    </div>
                    <div className="form-check">
                        <input required className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Li e aceito os presentes Termos e Condições de Uso
                        </label>
                    </div>
                    <div className="col-12">
                        <button type='submit' className='mx-1 btn btnCadastrar'>Cadastrar candidato</button>
                        <Link to='/admin' type='button' className='mx-1 btn btnFechar'>Voltar</Link>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default CandInsert;