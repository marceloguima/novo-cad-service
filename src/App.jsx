import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import Botao from "./components/Botao";
import CardServico from "./components/Card-servico";
import CardTotal from "./components/Card-total";

function App() {
    return (
        <div className="container">
            <header>
                <div className="top">
                    <h1 className="titulo-pagina">SERVIÇOS</h1>
                    <CardTotal />
                </div>

                <nav>
                    <ul>
                        <NavLink to="/" className={ ({isActive}) => (isActive ? 'link-ativo' : 'link-inativo')}>

                            <li>HOJE</li>
                        </NavLink>

                        <NavLink to="/servicoSemana" className={ ({isActive}) => (isActive ? 'link-ativo' : 'link-inativo')}>
                            <li>DA SEMANA</li>
                        </NavLink>

                        <NavLink to="/servicoMes" className={ ({isActive}) => (isActive ? 'link-ativo' : 'link-inativo')}>
                            <li>DO MÊS</li>
                        </NavLink>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </div>
    );
}

export default App;
