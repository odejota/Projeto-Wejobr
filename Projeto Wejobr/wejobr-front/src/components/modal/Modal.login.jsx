import './Modal.login.css';

function ModalLogin(props) {
    return (
        <div  className="modal fade w-100" id="ExemploModalCentralizado" tabIndex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body modalLogin">
                        <h5 className="modal-title" id="TituloModalCentralizado">Login</h5>
                        <select className="form-control col-sm-8 bg-light text-center" />
                        <option>Candidato</option>
                        <option>Empresa</option>
                        <input type="login" className="form-control col-sm-8 col-form-label bg-light" id="inputEmail3" placeholder="E-mail" />
                        <input type="password" className="form-control col-sm-8 bg-light" id="inputPassword3"
                            placeholder="Senha" />
                        <button type="submit" className="btn btnEntrar">Entrar</button>
                        <button type="button" className="btn btnFechar" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;