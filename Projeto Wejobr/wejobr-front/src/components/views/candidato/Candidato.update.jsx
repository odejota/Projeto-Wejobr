import { useRef } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function CandUpdate(props) {

    const cidade = useRef();
    const pais = useRef();
    const continente = useRef();
    const aeroportos_IATA = useRef();

    function updateData(event) {
        event.preventDefault()
        conn.put('/candidatos/editarCandidato', {
            idDestino: props.destino.idDestino,
            cidade: cidade.current.value,
            pais: pais.current.value,
            continente: continente.current.value,
            aeroportos_IATA: aeroportos_IATA.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1" show={props.show} onHide={props.hClose}>

            <h2 className='underAmarela'>Editar cadastro do candidato</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <form className="bg-light row g-3 rounded p-3 form-floating" onSubmit={updateData}>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu Nome Aqui' />
                        <label for="floatingInput">Nome completo</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Seu número de documento no Brasil' />
                        <label for="floatingInput">Doc. de identificação no Brasil</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="date" className="form-control" id="floatingInput" placeholder='Sua data de nascimento' />
                        <label for="floatingInput">Data de nascimento</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='De qual país você é?' />
                        <label for="floatingInput">Nacionalidade</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <select required className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Qual o seu estado civil?</option>
                            <option>Solteiro</option>
                            <option>Casado</option>
                            <option>Divorciado</option>
                            <option>Viúvo</option>
                            <option>União estável</option>
                        </select>
                        <label for="floatingSelect">Estado civil</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <select required className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Qual o seu idioma principal?</option>
                            <option>Português</option>
                            <option>Inglês</option>
                            <option>Espanhol</option>
                            <option>Italiano</option>
                            <option>Ucraniano</option>
                            <option>Outro</option>
                        </select>
                        <label for="floatingSelect">Idioma principal</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Qual o seu idioma secundário?</option>
                            <option>Português</option>
                            <option>Inglês</option>
                            <option>Espanhol</option>
                            <option>Italiano</option>
                            <option>Ucraniano</option>
                            <option>Outro</option>
                        </select>
                        <label for="floatingSelect">Idioma secundário (não obrigatório)</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Idioma que não esteja na lista' />
                        <label for="floatingInput">Idioma que não esteja na lista</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Pretensão de cargo principal' />
                        <label for="floatingInput">Pretensão de cargo principal</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Pretensão de cargo 2' />
                        <label for="floatingInput">Pretensão de cargo 2</label>
                    </div>
                    <div className="col-md-4 form-floating">
                        <input required type="text" className="form-control" id="floatingInput" placeholder='Pretensão de cargo 3' />
                        <label for="floatingInput">Pretensão de cargo 3</label>
                    </div>
                    <div className="col-md-12 form-floating">
                        <input required type="email" className="form-control" id="floatingInput" placeholder='Seu melhor e-mail' />
                        <label for="floatingInput">Seu melhor e-mail</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="password" className="form-control" id="floatingInput" placeholder='Crie uma senha forte' />
                        <label for="floatingInput">Crie uma senha forte</label>
                    </div>
                    <div className="col-md-6 form-floating">
                        <input required type="password" className="form-control" id="floatingInput" placeholder='Confirme a senha' />
                        <label for="floatingInput">Confirme a senha</label>
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
        </section>
    );
};

export default CandUpdate;