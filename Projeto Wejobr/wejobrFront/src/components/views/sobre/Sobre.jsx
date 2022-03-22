import './Sobre.css';
import Carla from '../../../img/Sobre/card-sobre.Carla.jpg';
import Danilo from '../../../img/Sobre/card-sobre.Danilo.png';
// import Flavio from '../../../img/Sobre/card-sobre.Flavio.jpg';
import oSimbolo from '../../../img/SVG Logos/Wejobr-Logo-Explanação.svg';

function Sobre() {
    return (
        <section className="container my-4" id="sobreSection1">
            <h2><span className='underTricolor'>Sobre o Wejobr</span></h2>

            <h3>A história</h3>
            <p>O projeto surgiu durante cumprimento de atividades práticas no curso do Recode Pro 2021, através do qual são formados desenvolvedores full-stack, fornecendo conhecimentos aos alunos para desenvolvimento de aplicações web.</p>
            <p>A partir de conversas com responsáveis por uma ONG que acolhe e auxilia refugiados no Brasil, foi constatada a carência de plataforma de divulgação de vagas de empregos voltadas aos refugiados. <br />
                Sendo assim, o Squad 22, um grupo que reúne dois dos alunos do projeto Recode Pro 2021, decidiu utilizar o conhecimento adquirido em sua participação no curso para desenvolver um projeto que disponibiliza uma plataforma de busca/divulgação de vagas de emprego, específicas para a população de refugiados atendidos pela <a href="https://sjmrbrasil.org/">SJMR</a> (ONG Serviço Jesuíta a Migrantes e Refugiados BRASIL): o Wejobr.</p>

            <h3>O propósito</h3>
            <p>Conforme relatório fornecido pelo <a href="https://www.acnur.org/portugues/">ACNUR</a> (Alto Comissariado das Nações Unidas para Refugiados), o tema Geração de Renda e Autossuficiência é a principal necessidade das pessoas refugiadas, apontada no formulário KoBo. Neste diagnóstico, foi identificada a oferta limitada de vagas de emprego aos refugiados, o que moveu a busca por uma ferramenta que auxilie a resolver este problema.</p>
            <p>O Wejobr consiste em um site que disponibiliza vagas de emprego nas mais diversas áreas, voltadas a contratação de pessoas refugiadas, proporcionando tanto a busca de vagas de emprego (pelos candidatos), assim com a busca de profissionais (para as empresas).</p>

            <hr className='my-4' />

            <h3>Os wejobers (Squad 22)</h3>
            <div className="squad22 mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 mx-4">
                        <img src={Carla} alt="Carla Peloia" className='rounded-circle shadow' />

                        <h5>Carla Peloia</h5>
                        <a className="bi bi-github fs-4 text-dark mx-2" href="https://github.com/carlapeloia"><i className=''></i></a>
                        <a className="bi bi-linkedin fs-4 text-dark mx-2" href="https://www.linkedin.com/in/carla-peloia-1a639b106/"><i className=''></i></a>
                    </div>
                    <div className="col-lg-4 mx-4">
                        <img src={Danilo} alt="Danilo José" className='rounded-circle shadow' />

                        <h5>Danilo José</h5>
                        <a className="bi bi-github fs-4 text-dark mx-2" href="https://github.com/odejota"><i className=''></i></a>
                        <a className="bi bi-linkedin fs-4 text-dark mx-2" href="https://www.linkedin.com/in/danjsan/"><i className=''></i></a>
                    </div>
                    {/* <div className="col-lg-4">
                        <img src={Flavio} alt="Flávio Image" className='rounded-circle shadow' />

                        <h5>Flávio Silva</h5>
                        <a className="bi bi-github fs-4 text-dark mx-2" href="#"></a>
                        <a className="bi bi-linkedin fs-4 text-dark mx-2" href="#"></a>
                    </div> */}
                </div>
            </div>

            <hr className='my-4' />

            <h3>O símbolo</h3>
            <div className="simbolo">
                <img src={oSimbolo} alt="Explanação da logo Wejober" style={{ width: "70%" }} />
            </div>
        </section>
    );
};

export default Sobre;