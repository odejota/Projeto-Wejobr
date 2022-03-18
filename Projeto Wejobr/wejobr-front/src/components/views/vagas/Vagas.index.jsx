import VagaCard from '../../card/VagaCard';
import './Vagas.css';

function Vagas(){
    return(
        <section className="container my-4" id="vagasSection1">
                
                <h2>Vagas</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-5 d-flex justify-content-center">

                    <VagaCard/>
                    <VagaCard/>
                    <VagaCard/>
                    <VagaCard/>
            
                </div>

        </section>
    );
};

export default Vagas;