import { useEffect, useState } from 'react';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function Candidatos() {

    const [candidato, setCandidato] = useState([]);

    useEffect(() => {
        conn.get('/candidatos')
            .then((res) => {
                setCandidato(res.data)
            })
            .catch((erro) => console.log(erro))
    }, []);

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underVerde'>Candidatos</h2>
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
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </section>
    );
};

export default Candidatos;