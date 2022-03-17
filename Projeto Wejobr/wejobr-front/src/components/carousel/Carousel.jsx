import './Carousel.css';

import slide1 from '../../img/Header/pexels-ono-kosuki-6000172 - Copia (2).jpg';
import slide2 from '../../img/Header/immigration-people - Copia (2).jpg';
import slide3 from '../../img/Header/pexels-ono-kosuki-6000175 - Copia (2).jpg';

function Carousel() {
    return (
        <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className='d-block w-100' src={slide1} alt="Slide 1" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />

                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h2>Oportunidades</h2>
                            <p className='d-none d-sm-block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <button className='d-none d-sm-block btn btnCadastrar'>Ver vagas</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className='d-block w-100' src={slide2} alt="Slide 2" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />

                    <div className="container">
                        <div className="carousel-caption">
                            <h2>Todo o mundo é bem-vindo!</h2>
                            <p className='d-none d-sm-block'>Enim officiis aperiam fugit illum autem suscipit, temporibus dicta dolores quia nulla architecto eius in, porro corrupti pariatur eaque eum, facere ex!</p>
                            <button className='d-none d-sm-block btn btnEntrar'>Cadastre-se</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className='d-block w-100' src={slide3} alt="Slide 3" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />

                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h2>Nós. Trabalho. Brasil.</h2>
                            <p className='d-none d-sm-block'>Ratione qui, hic assumenda quod rem tenetur consequuntur, quo ad iure quasi illo itaque quos quae totam ex porro quisquam voluptates ducimus.</p>
                            <button className='d-none d-sm-block btn btn-primary float-end'>Dê oportunidades</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="bi bi-arrow-left-circle fs-3" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="bi bi-arrow-right-circle fs-3" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </button>
        </div>
    );
};

export default Carousel;