import CardServico from "../components/Card-servico";
import Botao from "../components/Botao";

const ServicosDoDia = () => {
    return (
        <div>
            <main>
                <div className="services">
                    <CardServico />
                </div>

                <div className="buttons">
                    <Botao
                        classe="novo-servico botoes-padrao"
                        texto="Novo serviço"
                    />
                </div>
            </main>{" "}
        </div>
    );
};

export default ServicosDoDia;
