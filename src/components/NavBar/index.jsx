import { NavLink } from "react-router-dom";
import "./style.css"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "link-ativo" : "link-inativo"
                    }
                >
                    <li>HOJE</li>
                </NavLink>

                <NavLink
                    to="/servicoSemana"
                    className={({ isActive }) =>
                        isActive ? "link-ativo" : "link-inativo"
                    }
                >
                    <li>DA SEMANA</li>
                </NavLink>

                <NavLink
                    to="/servicoMes"
                    className={({ isActive }) =>
                        isActive ? "link-ativo" : "link-inativo"
                    }
                >
                    <li>DO MÊS</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default NavBar;
