import CrslParceiros from '../../carousel/Carousel.parceiros';
import '../vagas/Vagas.css';
import './Empresa.css';
import { Link } from 'react-router-dom';

import Img1 from '../../../img/Header/tabalhadores-3.jpg';
import Img2 from '../../../img/Header/trabalhadores2.jpg';
import Img3 from '../../../img/Header/pexels.png';

function Empresa() {

    return (
        <section className="container my-4" id="vagasSection1">

            <h2 className='underAzul'>Área da empresa</h2>
            <div className="align-items-stretch g-4 py-5">

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Diversidade.</h2>
                        <p className="lead">Traga mais diversidade para o ambiente de trabalho da sua empresa, com pessoas que demostram alto grau de motivação com trajetórias, qualificações e experiências, que podem colaborar com o desempenho da sua organização.</p>
                        <Link to='' className='btn btnEntrar'>Buscar currículos</Link>

                    </div>
                    <div className="col-md-5">
                        <img className='featurette-image img-fluid mx-auto' src={Img1} alt="" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Lorem. <span className="text-muted">Ipsum.</span></h2>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat recusandae iusto. Natus esse inventore amet eos, nihil minima laborum, consectetur voluptate vitae ea quo officiis deserunt, delectus quos. Hic.</p>
                        <Link to='/vagas/cadastrarVaga' className='btn btnVaga'>Cadastrar vagas</Link>

                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className='featurette-image img-fluid mx-auto' src={Img2} alt="" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Dolor. <span className="text-muted">Sit.</span></h2>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus odit voluptatem facilis inventore? Fugit adipisci animi labore voluptates. Repellat deleniti dolorum ab dicta dolor tempore consectetur architecto ut sunt.</p>
                        <Link to='' className='btn btnCadastrar'>Cadastre sua empresa</Link>
                    </div>
                    <div className="col-md-5">
                        <img className='featurette-image img-fluid mx-auto' src={Img3} alt="" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row btnsEmp">
                    <Link to='/vagas/cadastrarVaga' className='btn btnVaga col-5 col-md-4 col-lg-3 m-3'>Cadastrar vagas</Link>
                    <Link to='' className='btn btnEntrar col-5 col-md-4 col-lg-3 m-3'>Buscar currículos</Link>
                    <Link to='' className='btn btnCadastrar col-7 col-md-4 col-lg-3 m-3'>Cadastre sua empresa</Link>
                </div>

            </div>

            <CrslParceiros />
        </section>
    );
};

export default Empresa;