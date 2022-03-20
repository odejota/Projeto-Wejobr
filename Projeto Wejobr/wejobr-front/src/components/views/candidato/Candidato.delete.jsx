import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function CandDel() {

    const [candidato, setCandidato] = useState([]);

    useEffect(() => {
        conn.get('/candidatos')
            .then((res) => {
                setCandidato(res.data)
            })
            .catch((erro) => console.log(erro))
    }, []);

    function deletar(del) {
        conn.delete(`/candidatos/${del.target.value}`)
            .then(() => conn.get('/candidatos')
                .then((res) => {
                    setCandidato(res.data)
                })
                .catch((erro) => console.log(erro))).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underVermelha'>Apagar cadastro de candidatos</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Data de nascimento</th>
                            <th>Nacionalidade</th>
                            <th>Doc. de identificação no Brasil</th>
                            <th>Idioma</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidato.map((candidato) => (
                            <tr key={candidato.idCandidato}>
                                <td>{candidato.cidade}</td>
                                <td>{candidato.pais}</td>
                                <td>{candidato.pais}</td>
                                <td>{candidato.pais}</td>
                                <td>{candidato.continente}</td>
                                <td>{candidato.aeroportos_IATA}</td>
                                <td>
                                    <button className="btn btnDeletar btn-sm" value={candidato.idDestino} onClick={(del) => deletar(del)}>Apagar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            
            <div className="col-12">
                <Link to='/admin' type='button' className='mx-1 btn btnFechar'>Voltar</Link>
            </div>

        </section>
    );
};

export default CandDel;