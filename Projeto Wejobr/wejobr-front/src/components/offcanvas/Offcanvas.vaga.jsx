import { useRef } from "react";
import { Offcanvas } from "react-bootstrap";
import conn from "../../server/conn";

function OffcanvasVaga(props) {

    const codVaga = useRef();
    const cargoVaga = useRef();
    const descricaoVaga = useRef();
    const salarioVaga = useRef();
    const nivelInstrucaoVaga = useRef();
    const localidadeVaga = useRef();
    const regimeContratacaoVaga = useRef();
    const vagaPcd = useRef();
    const vagaDestaque = useRef();
    const nomeEmpresaVaga = useRef();

    function updateData(event) {
        event.preventDefault()
        conn.put('/vagas/admin/editarVaga', {
            codVaga: props.vaga.codVaga,
            // codVaga: codVaga.current.value,
            cargoVaga: cargoVaga.current.value,
            descricaoVaga: descricaoVaga.current.value,
            salarioVaga: salarioVaga.current.value,
            nivelInstrucaoVaga: nivelInstrucaoVaga.current.value,
            localidadeVaga: localidadeVaga.current.value,
            regimeContratacaoVaga: regimeContratacaoVaga.current.value,
            vagaPcd: vagaPcd.current.value,
            vagaDestaque: vagaDestaque.current.value,            
            nomeEmpresaVaga: nomeEmpresaVaga.current.value          
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    }

    return (
        <>
            <Offcanvas show={props.showOc} onHide={props.hCloseOc}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Editar vaga</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form className="row g-3" onSubmit={updateData}>
                        <div className="col-md-6">
                            <label className="form-label">Cargo</label>
                            <input required type="text" className="form-control" placeholder='Auxiliar de Estoque' ref={cargoVaga} defaultValue={props.vaga.cargoVaga}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Código da vaga</label>
                            <input type="text" className="form-control" disabled ref={codVaga} defaultValue={props.vaga.codVaga}/>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Salário</label>
                            <div className="input-group">
                                <div className="input-group-text">R$</div>
                                <input required type="text" className="form-control" placeholder='2.235' ref={salarioVaga} defaultValue={props.vaga.salarioVaga}/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <label className="form-label">Localidade</label>
                            <input required type="text" className="form-control" placeholder='Belo Horizonte - MG' ref={localidadeVaga} defaultValue={props.vaga.localidadeVaga}/>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Descrição da vaga</label>
                            <textarea required type="text" className="form-control" placeholder='' ref={descricaoVaga} defaultValue={props.vaga.descricaoVaga}/>
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Nível de instrução</label>
                            <select required className="form-select" ref={nivelInstrucaoVaga} defaultValue={props.vaga.nivelInstrucaoVaga}>
                                <option className='text-muted'>Escolha...</option>
                                <option value={"Fundamental"}>Fundamental</option>
                                <option value={"Médio"}>Médio</option>
                                <option value={"Superior"}>Superior</option>
                                <option value={"Técnico"}>Técnico</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Vaga também direcionada à PCD?</label>
                            <select required className="form-select" ref={vagaPcd} defaultValue={props.vaga.vagaPcd}>
                                <option className='text-muted'>Escolha...</option>
                                <option value={"Sim"}>Sim</option>
                                <option value={"Não"}>Não</option>
                            </select>
                        </div>
                        <div className="col-auto">
                        <label className="form-label">Deseja destacar essa oportunidade?</label>
                        <select required className="form-select" ref={vagaDestaque} defaultValue={props.vaga.vagaDestaque}>
                            <option className='text-muted'>Escolha...</option>
                            <option value={"Sim"}>Sim</option>
                            <option value={"Não"}>Não</option>
                        </select>
                    </div>
                        <div className="col-md-6">
                            <label className="form-label">Regime de contratação</label>
                            <input required type="text" className="form-control" placeholder="CLT, PJ, Freelance..." ref={regimeContratacaoVaga} defaultValue={props.vaga.regimeContratacaoVaga}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Empresa</label>
                            <input required type="text" className="form-control" placeholder="Nome da empresa empregadora" ref={nomeEmpresaVaga} defaultValue={props.vaga.nomeEmpresaVaga}/>
                        </div>
                        <div className="col-12">
                            <button type='submit' className='mx-1 btn btnCadastrar'>Atualizar vaga</button>
                            <button type='button' className='mx-1 btn btnFechar' onClick={props.hCloseOc}>Fechar</button>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffcanvasVaga;