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
                    <li>SERVIÇO DE HOJE</li>
                </NavLink>

                
                <NavLink
                    to="/servicoMes"
                    className={({ isActive }) =>
                        isActive ? "link-ativo" : "link-inativo"
                    }
                >
                    <li>SERVIÇO DO MÊS</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default NavBar;
