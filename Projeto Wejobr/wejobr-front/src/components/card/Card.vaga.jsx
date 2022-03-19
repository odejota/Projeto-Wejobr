import { useState } from 'react';
import ModalVaga from '../modal/Modal.vaga';
import './Card.vaga.css';

function CardVaga() {

    const [show, setShow] = useState(false);
    const hClose = () => setShow(false);
    const hShow = () => setShow(true);

    return (
        <div className="col">
            <div className="card h-100 vagaCard">
                <div className="card-header">
                    <h6 className="mx-1 card-title">Card title</h6>
                </div>
                <div className="card-body">
                    <ul className="card-text">
                        <li>Nível: </li>
                        <li>Salário: R$ </li>
                        <li>Localidade: </li>
                        <li>Código da vaga: </li>
                    </ul>
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-sm btnVaga" onClick={hShow}>Ver detalhes da vaga</button>
                        {show ? <ModalVaga show={show} hClose={hClose}/> : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardVaga;