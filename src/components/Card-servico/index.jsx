import "./style.css";
import Botao from "../Botao";


const CardServico = () => {
    return (
        <div className="card-servico">
            <div className="content">
                <h2>Troca de óleo gol</h2>
                <p>Data: 05/04/2025</p>
                <p>Valor: R$ 120,00</p>
            </div>
            <Botao classe="btn-card-serv botoes-padrao" texto="Ver mais" />
        </div>
    );
};

export default CardServico;
