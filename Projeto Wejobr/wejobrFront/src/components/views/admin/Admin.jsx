import { Link } from "react-router-dom";
import '../vagas/Vagas.css';

function Admin() {
    return (
        <section className="container my-4" id="vagasSection1">
            <div className="container table-responsive-xxl">

                <h2 className="mb-5 underAmarela" id="">Área do Administrador</h2>

                <h4>Candidato</h4>
                <table className="table table-hover table-light shadow-sm rounded">
                    <tbody>
                        <tr>
                            <td>Cadastrar candidato</td>
                            <td><Link to='/candidato/cadastrarCandidato'><button className="btn btnCadastrar btn-sm"><i className="bi bi-plus-lg"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Editar cadastro</td>
                            <td><Link to='/editarCandidato'><button className="btn btnEntrar btn-sm"><i className="bi bi-pencil-fill"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Apagar cadastro</td>
                            <td><Link to='/apagarCandidato'><button className="btn btnDeletar btn-sm"><i className="bi bi-x-lg"></i></button></Link></td>
                        </tr>
                    </tbody>
                </table>
                
                <h4>Recrutador</h4>
                <table className="table table-hover table-light shadow-sm rounded">
                    <tbody>
                        <tr>
                            <td>Cadastrar recrutador</td>
                            <td><Link to='/recrutador/cadastrarRecrutador'><button className="btn btnCadastrar btn-sm"><i className="bi bi-plus-lg"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Editar cadastro</td>
                            <td><Link to='/editarRecrutador'><button className="btn btnEntrar btn-sm"><i className="bi bi-pencil-fill"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Apagar cadastro</td>
                            <td><Link to='/apagarRecrutador'><button className="btn btnDeletar btn-sm"><i className="bi bi-x-lg"></i></button></Link></td>
                        </tr>
                    </tbody>
                </table>

                <h4>Vaga</h4>
                <table className="table table-hover table-light shadow-sm rounded">
                    <tbody>
                        <tr>
                            <td>Cadastrar vaga</td>
                            <td><Link to='/vagas/cadastrarVaga'><button className="btn btnCadastrar btn-sm"><i className="bi bi-plus-lg"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Gerenciar vagas</td>
                            <td><Link to='/gerenciarVagas'><button className="btn btnVaga btn-sm"><i className="bi bi-grid-3x3-gap-fill"></i></button></Link></td>
                        </tr>
                    </tbody>
                </table>

                <h4>Empresa</h4>
                <table className="table table-hover table-light shadow-sm rounded">
                    <tbody>
                        <tr>
                            <td>Cadastrar empresa</td>
                            <td><Link to='/empresa/cadastrarEmpresa'><button className="btn btnCadastrar btn-sm"><i className="bi bi-plus-lg"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Editar cadastro</td>
                            <td><Link to='/editarEmpresa'><button className="btn btnEntrar btn-sm"><i className="bi bi-pencil-fill"></i></button></Link></td>
                        </tr>
                        <tr>
                            <td>Apagar cadastro</td>
                            <td><Link to='/apagarEmpresa'><button className="btn btnDeletar btn-sm"><i className="bi bi-x-lg"></i></button></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Admin;