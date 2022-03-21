import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function RecDel() {

    const [recrutador, setRecrutador] = useState([]);

    useEffect(() => {
        conn.get('/recrutadores')
            .then((res) => {
                setRecrutador(res.data)
            })
            .catch((erro) => console.log(erro))
    }, []);

    function deletar(del) {
        conn.delete(`/recrutadores/admin/deletarRecrutador/${del.target.value}`)
            .then(() => conn.get('/recrutadores')
                .then((res) => {
                    setRecrutador(res.data)
                })
                .catch((erro) => console.log(erro))).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underVermelha'>Apagar cadastro de recrutadores</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome do recrutador</th>
                            <th>Empresa representada</th>
                            <th>Departamento</th>
                            <th>E-mail comercial</th>
                            <th>Telefone comercial</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recrutador.map((recrutador) => (
                            <tr key={recrutador.idRecrutador}>
                                <td>{recrutador.nomeRecrutador}</td>
                                <td>{recrutador.empresaRecrutador}</td>
                                <td>{recrutador.departamentoRecrutador}</td>
                                <td>{recrutador.emailRecrutador}</td>
                                <td>{recrutador.telRecrutador}</td>
                                <td>
                                    <button className="btn btnDeletar btn-sm" value={recrutador.idRecrutador} onClick={(del) => deletar(del)}>Apagar</button>
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

export default RecDel;