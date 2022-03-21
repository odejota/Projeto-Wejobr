import { useEffect, useState } from 'react';
import conn from '../../server/conn';
import ModalVaga from '../modal/Modal.vaga';
import './Card.vaga.css';

function CardVaga() {

    const [show, setShow] = useState(false);
    const hClose = () => { setShow(false) };
    const hShow = (vaga) => {
        setShow(true);
        setVagaDetail(vaga);
    }

    const [vagaDetail, setVagaDetail] = useState();
    const [vaga, setVaga] = useState([]);

    useEffect(() => {
        conn.get('/vagas')
            .then((res) => {
                setVaga(res.data)
            })
            .catch((erro) => console.log(erro))
    }, []);

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
                            <div className="d-grid gap-2">
                                <button type="button" className="btn btn-sm btnVaga" onClick={hShow}>Ver detalhes da vaga</button>
                                {show ? <ModalVaga show={show} hClose={hClose} vaga={vagaDetail}/> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardVaga;