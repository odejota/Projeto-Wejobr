import CardVagaAdm from '../../card/Card.vaga.admin';
import './Vagas.css';

function VagasUpdtDel(){
    return(
        <section className="container my-4" id="vagasSection1">
                
                <h2 className='underAzul'>Gerenciamento de vagas</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-5 d-flex justify-content-center">

                    <CardVagaAdm/>

                </div>

        </section>
    );
};

export default VagasUpdtDel;