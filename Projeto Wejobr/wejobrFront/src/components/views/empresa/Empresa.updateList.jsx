import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import conn from '../../../server/conn';
import EmpUpdate from '../../offcanvas/Offcanvas.empresa';
import '../vagas/Vagas.css';

function EmpUpdtList() {

    const [show, setShow] = useState(false);
    const hClose = () => { setShow(false); }
    const hShow = (empresa) => {
        setShow(true);
        setEmpresaUpdt(empresa);
    }

    const [empresa, setEmpresa] = useState([]);
    const [empresaUpdt, setEmpresaUpdt] = useState();

    useEffect(() => {
        conn.get('/empresas')
            .then((res) => {
                setEmpresa(res.data)
            })
            .catch((erro) => console.log(erro.data))
    }, []);

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underAmarela'>Editar cadastro de empresas</h2>
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
                                <td>{empresa.nomeEmpresa}</td>
                                <td>{empresa.cnpjEmpresa}</td>
                                <td>{empresa.cepEmpresa}</td>
                                <td>{empresa.ramoEmpresa}</td>
                                <td>{empresa.telefoneEmpresa}</td>
                                <td>{empresa.linkedinEmpresa}</td>
                                <td>
                                    <button className="btn btnEntrar btn-sm" onClick={() => hShow(empresa)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                        {show ? <EmpUpdate show={show} hClose={hClose} empresa={empresaUpdt} /> : <></>}
                    </tbody>
                </table>

            </div>

            <div className="col-12">
                <Link to='/admin' type='button' className='mx-1 btn btnFechar'>Voltar</Link>
            </div>

        </section>
    );
};

export default EmpUpdtList;