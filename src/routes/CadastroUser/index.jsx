import "./style.css";
import CampoEntrada from "../../components/Campo-entrada";
import Botao from "../../components/Botao";
import { Link } from "react-router-dom";


const Cadastro = () => {
    return (
        <main>
            <h1>Cadastro</h1>
            {/* esse componente é composto por label e input */}
            <CampoEntrada
                tipo="text"
                place="Digite seu primeiro nome"
                classe="campo"
                texto="Nome"
                id="name"
                htmlFor="name"
            />
            <CampoEntrada
                tipo="e-mail"
                place="@gmail.com"
                classe="campo"
                texto="E-mail"
                id="email"
                htmlFor="email"
            />

            <CampoEntrada
                tipo="password"
                place="$g#M27"
                classe="campo"
                texto="Senha"
                id="senha"
                htmlFor="senha"
            />

            <CampoEntrada
                tipo="password"
                place="$g#M27"
                classe="campo"
                texto="Confirme a senha"
                id="confirmeSenha"
                htmlFor="confirmeSenha"
            />

            <CampoEntrada
                tipo="number"
                place="50"
                classe="campo"
                texto="Comição sobre o serviço"
                id="comição"
                htmlFor="comição"
            />

            <Botao classe="botoes-padrao cadastrar" texto="Cadastrar" />
            <p className="check-count">Já tem uma conta? <Link to="/login">Entrar</Link></p> 
        </main>
    );
};

export default Cadastro;
