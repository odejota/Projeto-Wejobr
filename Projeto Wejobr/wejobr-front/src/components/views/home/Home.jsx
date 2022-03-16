import CrslParceiros from '../../carousel/Carousel.parceiros';
import './Home.css';

function Home() {
    return (
        <section className="container mt-4" id="homeSection1">

            <div className="my-3 homeBtns">
                <a className="btn btnProcEmp mx-1" type="button">Procurando emprego?</a>
                <a className="btn btnContrat mx-1" type="button">Querendo contratar?</a>
            </div>

            <hr />

            <h3>Vagas em Destaque</h3>

            <div className="container">
                <a className="btn d-block btnCadastrar mb-5" type="button">Ver todas as vagas</a>
            </div>

            <CrslParceiros/>
        </section>
    );
};

export default Home;