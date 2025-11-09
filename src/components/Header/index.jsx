import "./style.css";

const Header = (props) => {
    return (
        // o header possui props que serão passadas a depender da tela, em algumas telas o header
        //  terá links e card com total, em outras apenas o título da página.
        <header>
            <div className="top">
                <h1 className="titulo-pagina">{props.nome}</h1>

                {props.card}
                {props.nav}
            </div>
        </header>
    );
};

export default Header;
