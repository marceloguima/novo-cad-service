import "./style.css";
import CampoEntrada from "../../components/Campo-entrada";
import Botao from "../../components/Botao";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Login = () => {
    return (
        <>
            <Header nome="Login"/>

            <main className="container-login">
                <img src="./minha-logo.png" alt="logo" className="logo" />
                <form>
                    <CampoEntrada
                    label="E-mil"
                        tipo="e-mail"
                        place="@gmail.com"
                        classe="campo"
                        texto="E-mail"
                        id="email"
                        htmlFor="email"
                    />

                    <CampoEntrada
                    label="Senha"
                        tipo="password"
                        place="$g#M27"
                        classe="campo"
                        texto="Senha"
                        id="senha"
                        htmlFor="senha"
                    />

                    <Botao classe="botoes-padrao cadastrar" children="Entrar" />
                    <p className="check-count">
                        Não tem uma conta?{" "}
                        <Link to="/cadastro">Criar conta</Link>
                    </p>
                </form>
            </main>
        </>
    );
};

export default Login;
