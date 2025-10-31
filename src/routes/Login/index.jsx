import "./style.css"
import CampoEntrada from "../../components/Campo-entrada";
import Botao from "../../components/Botao";
import { Link } from "react-router-dom";



const Login = () => {
  return (
   
   <main>
    <h1>Login</h1>
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

              <Botao classe="botoes-padrao cadastrar" texto="Entrar" />
            <p className="check-count">Não tem uma conta?  <Link to="/cadastro">Criar conta</Link></p>
   </main>
  )
}    

export default Login
