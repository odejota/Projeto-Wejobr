import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import '../vagas/Vagas.css';
import RecUpdate from './Recrutador.update';

function RecUpdtList() {

    const [show, setShow] = useState(false);
    const hClose = () => { setShow(false); }
    const hShow = (recrutador) => {
        setShow(true);
        setRecrutadorUpdt(recrutador);
    }

    const [recrutador, setRecrutador] = useState([]);
    const [recrutadorUpdt, setRecrutadorUpdt] = useState();

    useEffect(() => {
        conn.get('/recrutadores')
            .then((res) => {
                setRecrutador(res.data)
            })
            .catch((erro) => console.log(erro.data))
    }, []);

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underAmarela'>Editar cadastro de recrutadores</h2>
            <div className="align-items-stretch g-4 py-5 d-flex justify-content-center">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome do recrutador</th>
                            <th>E-mail comercial</th>
                            <th>Telefone comercial</th>
                            <th>Empresa representada</th>
                            <th>Departamento</th>
                            <th>Cargo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recrutador.map((recrutador) => (
                            <tr key={recrutador.idRecrutador}>
                                <td>{recrutador.nomeRecrutador}</td>
                                <td>{recrutador.emailRecrutador}</td>
                                <td>{recrutador.telRecrutador}</td>
                                <td>{recrutador.empresaRecrutador}</td>
                                <td>{recrutador.departamentoRecrutador}</td>
                                <td>{recrutador.cargoRecrutador}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm" onClick={() => hShow(recrutador)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                        {show ? <RecUpdate show={show} hClose={hClose} recrutador={recrutadorUpdt} /> : <></>}
                    </tbody>
                </table>

            </div>

            <div className="col-12">
                <Link to='/admin' type='button' className='mx-1 btn btnFechar'>Voltar</Link>
            </div>

        </section>
    );
};

export default RecUpdtList;