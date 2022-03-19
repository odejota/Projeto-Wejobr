import { useRef } from "react";
import { Offcanvas } from "react-bootstrap";
import conn from "../../server/conn";

function OffcanvasVaga(props) {

    // const diarias = useRef();
    // const aereo = useRef();
    // const preco = useRef();
    // const pacoteImg = useRef();
    // const destino = useRef();
    // const pais = useRef();

    // function updateData(event) {
    //     event.preventDefault()
    //     conn.put('/vagas/editarVaga', {
    //         idVaga: props.vaga.idVaga,
    //         diarias: diarias.current.value,
    //         aereo: aereo.current.value,
    //         preco: preco.current.value,
    //         pacoteImg: pacoteImg.current.value,
    //         destino: destino.current.value,
    //         pais: pais.current.value
    //     }).then(() => window.location.reload()).catch((erro) => console.log(erro))
    // }

    return (
        <>
            <Offcanvas show={props.showOc} onHide={props.hCloseOc}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Editar vaga</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Cargo</label>
                            <input required type="text" className="form-control" placeholder='Auxiliar de Estoque' />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Código da vaga</label>
                            <input required type="text" className="form-control" placeholder='123' />
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Salário</label>
                            <div class="input-group">
                                <div class="input-group-text">R$</div>
                                <input required type="text" className="form-control" placeholder='2.235' />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <label className="form-label">Localidade</label>
                            <input required type="text" className="form-control" placeholder='Belo Horizonte - MG' />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Descrição da vaga</label>
                            <textarea required type="text" className="form-control" placeholder='' />
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Nível de instrução</label>
                            <select required className="form-select" >
                                <option className='text-muted'>Escolha...</option>
                                <option value={"Fundamental"}>Fundamental</option>
                                <option value={"Médio"}>Médio</option>
                                <option value={"Superior"}>Superior</option>
                                <option value={"Técnico"}>Técnico</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <label className="form-label">Vaga também direcionada à PCD?</label>
                            <select required className="form-select" >
                                <option className='text-muted'>Escolha...</option>
                                <option value={"Sim"}>Sim</option>
                                <option value={"Não"}>Não</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Regime de contratação</label>
                            <input required type="text" className="form-control" placeholder="CLT, PJ, Freelance..." />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">ID da empresa</label>
                            <input required type="text" className="form-control" placeholder="321" />
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