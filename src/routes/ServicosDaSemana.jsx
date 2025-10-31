import Botao from "../components/Botao";
import CardServico from "../components/Card-servico";

const ServicosDaSemana = () => {
    return (
        <main>
            <div className="services">
                <CardServico />
                <CardServico />
            </div>

            <div className="buttons">
                <Botao
                    classe="novo-servico botoes-padrao"
                    texto="Novo serviço"
                />
            </div>
        </main>
    );
};

export default ServicosDaSemana;
