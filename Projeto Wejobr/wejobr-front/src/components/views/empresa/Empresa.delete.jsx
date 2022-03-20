import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';

function EmpDel() {

    const [empresa, setEmpresa] = useState([]);

    useEffect(() => {
        conn.get('/empresas')
            .then((res) => {
                setEmpresa(res.data)
            })
            .catch((erro) => console.log(erro))
    }, []);

    function deletar(del) {
        conn.delete(`/empresas/${del.target.value}`)
            .then(() => conn.get('/empresas')
                .then((res) => {
                    setEmpresa(res.data)
                })
                .catch((erro) => console.log(erro))).catch((erro) => console.log(erro))
    }

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underVermelha'>Apagar cadastro de empresas</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome da empresa</th>
                            <th>CNPJ</th>
                            <th>CEP</th>
                            <th>Ramo</th>
                            <th>Telefone</th>
                            <th>LinkedIn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empresa.map((empresa) => (
                            <tr key={empresa.idEmpresa}>
                                <td>{empresa.cidade}</td>
                                <td>{empresa.pais}</td>
                                <td>{empresa.pais}</td>
                                <td>{empresa.pais}</td>
                                <td>{empresa.continente}</td>
                                <td>{empresa.aeroportos_IATA}</td>
                                <td>
                                    <button className="btn btnDeletar btn-sm" value={empresa.idDestino} onClick={(del) => deletar(del)}>Apagar</button>
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

export default EmpDel;