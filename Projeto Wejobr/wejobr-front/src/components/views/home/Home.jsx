import { Link } from 'react-router-dom';
import CardVaga from '../../card/Card.vaga';
import Carousel from '../../carousel/Carousel';
import CrslParceiros from '../../carousel/Carousel.parceiros';
import './Home.css';

function Home() {
    return (
        <>
            <Carousel />
            <section className="container mt-4" id="homeSection1">

                <div className="my-3 homeBtns">
                    <a className="btn btnProcEmp mx-1" type="button">Procurando emprego?</a>
                    <a className="btn btnContrat mx-1" type="button">Querendo contratar?</a>
                </div>

                <hr />

                <h3>Vagas em Destaque</h3>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-5 d-flex justify-content-center">

                    <CardVaga />

                </div>
                <div className="container">
                    <Link to='/vagas' className="btn d-block btnCadastrar mb-5" type="button">Ver todas as vagas</Link>
                </div>

                <CrslParceiros />
            </section>
        </>
    );
};

export default Home;