import "./style.css";
// import Botao from "../Botao";

const CardServico = (props) => {
    return (
        <div className="card-servico">
            <div className="content">
                <div className="dados">
                    <div className="titulo-descricao">
                        <h2>{props.descricao}</h2>
                    </div>
                    <p className="campo-valor"><span>Valor</span>{props.valor}</p>
                    <p>{props.modelo}</p>
                    <p>{props.placa}</p>
                    <p>{props.data}</p>
                    <p>{props.vendedor}</p>
                </div>
            </div>
            {props.obs}

            <div className="butons-card-servico">
                {props.btnMaisDetalhes}
                {props.btnApagarServico}
            </div>
        </div>
    );
};

export default CardServico;
