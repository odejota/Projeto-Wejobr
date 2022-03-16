import './Carousel.parceiros.css';

import Recode from '../../img/Parceiros/recodepro.png';
import SJMR from '../../img/Parceiros/SJMR-removebg-preview.png';
import DejotaTur from '../../img/Parceiros/DejotaTur-Logo.svg';

function CrslParceiros() {
    return (
        <section className="" id="homeSection1">
            <h3>Parceiros</h3>

            <div className="carousel slide mt-3" data-bs-ride="carousel">
                <div className="carousel-inner parceirosCrsel">
                    <div className="carousel-item row no-gutters active">
                        <div className="col-3 float-start">
                            <img className="d-block w-50" src={Recode} alt="1"/>
                        </div>
                        <div className="col-3 float-start">
                            <img className="d-block w-50" src={SJMR} alt="2"/>
                        </div>
                        <div className="col-3 float-start">
                            <img className="d-block w-75" src={DejotaTur} alt="3"/>
                        </div>
                        <div className="col-3 float-start">
                            <img className="d-block w-50" src={Recode} alt="4"/>
                        </div>
                    </div>

                    <div className="carousel-item row no-gutters">
                        <div className="col-3 float-start">
                            <img className="d-block w-50" src={SJMR} alt="5"/>
                        </div>
                        <div className="col-3 float-start">
                            <img className="d-block w-75" src={DejotaTur} alt="6"/>
                        </div>
                        <div className="col-3 float-start">
                            <img className="d-block w-50" src={Recode} alt="7"/>
                        </div>
                        <div className="col-3 float-start">
                            <img className="d-block w-50" src={SJMR} alt="8"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CrslParceiros;