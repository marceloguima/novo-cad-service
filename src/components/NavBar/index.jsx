import { NavLink } from "react-router-dom";
import "./style.css";
import { FaScrewdriverWrench } from "react-icons/fa6";


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
                    <li className="servicos-icon">
                        <FaScrewdriverWrench />
                        <span className="span-link-servicos">serviços</span>
                    </li>
                </NavLink>

                {/* <NavLink
                    to="/servicoMes"
                    className={({ isActive }) =>
                        isActive ? "link-ativo" : "link-inativo"
                    }
                >
                    <li>SERVIÇO DO MÊS</li>
                </NavLink> */}
            </ul>
        </nav>
    );
};

export default NavBar;
