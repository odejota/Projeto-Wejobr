import { useEffect, useState } from 'react';
import conn from '../../server/conn';
import ModalVaga from '../modal/Modal.vaga';
import OffcanvasVaga from '../offcanvas/Offcanvas.vaga';
import './Card.vaga.css';

function CardVagaAdm() {

    const [show, setShow] = useState(false);
    const hClose = () => setShow(false);
    const hShow = () => setShow(true);

    const [showOc, setShowOc] = useState(false);
    const hCloseOc = () => { setShowOc(false) };
    const hShowOc = (vaga) => {
        setShowOc(true);
        setVagaUpdt(vaga);
    }

    const [vagaUpdt, setVagaUpdt] = useState();
    const [vaga, setVaga] = useState([]);

    useEffect(() => {
        conn.get('/vagas')
            .then((res) => {
                setVaga(res.data)
            })
            .catch((erro) => console.log(erro))
    }, []);

    function deletar(del) {
        conn.delete(`/vagas/admin/deletarVaga/${del.target.value}`)
            .then(() => conn.get('/vagas')
                .then((res) => { setVaga(res.data) })
                .catch((erro) => console.log(erro))).catch((erro) => console.log(erro))
    }

    return (
        <>
            {vaga.map((vaga) => (
                <div className="col" key={vaga.codVaga}>
                    <div className="card h-100 vagaCard">
                        <div className="card-header">
                            <h6 className="mx-1 card-title">{vaga.cargoVaga}</h6>
                        </div>
                        <div className="card-body">
                            <ul className="card-text">
                                <li>Nível: {vaga.nivelInstrucaoVaga}</li>
                                <li>Salário: R$ {vaga.salarioVaga}</li>
                                <li>Localidade: {vaga.localidadeVaga}</li>
                                <li>Código da vaga: {vaga.codVaga}</li>
                            </ul>

                            <div className='row d-flex justify-content-evenly'>
                                <button type="button" className="btn btn-sm col mx-1 btnVaga" onClick={hShow}>Detalhar</button>
                                {show ? <ModalVaga show={show} hClose={hClose} /> : <></>}
                                <button type="button" className="btn btn-sm col mx-1 btnEntrar" onClick={() => hShowOc(vaga)}>Editar</button>
                                {showOc ? <OffcanvasVaga showOc={showOc} hCloseOc={hCloseOc} vaga={vagaUpdt} /> : <></>}
                                <button type="button" className="btn btn-sm col mx-1 btnDeletar" value={vaga.codVaga} onClick={(del) => deletar(del)}>Apagar</button>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardVagaAdm;