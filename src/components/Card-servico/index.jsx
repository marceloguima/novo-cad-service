import "./style.css";
import Botao from "../Botao";

const CardServico = (props) => {
    return (
        <div className="card-servico">
            <div className="content">
                <div className="dados">
                    <h2>{props.descricao}</h2>
                    <p>{props.valor}</p>
                    <p>{props.data}</p>
                    <p>{props.modelo}</p>
                    <p>{props.placa}</p>
                    <p>{props.vendedor}</p>
                </div>
                <Botao classe="btn-card-serv" texto="Ver mais" />
            </div>
            <p className="obs">{props.obs}</p> 
        </div>
    );
};

export default CardServico;
