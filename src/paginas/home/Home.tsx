import React from "react";
import './Home.css';


function Home() {
    return (
        <div>
            <div className="container">
                <div>
                    <img className="ttLogo" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png" alt="" />
                    <h2 className="frase1PR">Entrar no twitter</h2>
                    <div>
                        <input id="1" className="inputNome" type="text" placeholder="Celular, email ou nome de usuário" />
                    </div>
                    <div>
                        <input className="inputSenha" type="text" placeholder="Senha" />
                    </div>
                    <div>
                        <button className="login hoverButton">Entrar</button>
                    </div>
                    <div>
                        <a className="alter" href="#">Esqueceu a senha? - Inscreva-se no twitter </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;