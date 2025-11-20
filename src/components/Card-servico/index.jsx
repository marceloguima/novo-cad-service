import "./style.css";
// import Botao from "../Botao";
import { TbHandFingerRight } from "react-icons/tb";

const CardServico = (props) => {
    return (
        <div className={props.expandidoClassName}>
            <div className="content">
                <div className="dados">
                    <div className="titulo-descricao">
                        <div id={props.id} className="caixa-icon-alert-expandir">
                            {props.icon}
                            {props.btnExpandir}
                        </div>
                        <h2>{props.descricao}</h2>
                    </div>
                    <p className="dados-card">
                        <span>Valor:</span>
                        {props.valor}
                    </p>

                    {props.expandido && (
                        <>
                            <p className="dados-card">
                                <span>Modelo:</span>
                                {props.modelo}
                            </p>
                            <p className="dados-card">
                                <span>Placa:</span>
                                {props.placa}
                            </p>
                            <p className="dados-card">
                                <span>data:</span>
                                {props.data}
                            </p>
                            <p className="dados-card">
                                <span>vendedor:</span>
                                {props.vendedor}
                            </p>
                            <div className={props.obsClassName}>
                                <p className="dados-card">
                                    <span>
                                        Observação: <TbHandFingerRight />
                                    </span>
                                    {props.obs}
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="butons-card-servico">
                {props.btnApagarServico}
                {props.btnEditarServico}
                {props.btnCancelaExclusao}
            </div>
        </div>
    );
};

export default CardServico;
