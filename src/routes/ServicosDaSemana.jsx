import Botao from "../components/Botao";
import CardServico from "../components/Card-servico";
import CardTotal from "../components/Card-total";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const ServicosDaSemana = () => {
    return (
        <>
            <Header
                card={<CardTotal/>}
                nav={
                   <NavBar/>
                }
            />
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
        </>
    );
};

export default ServicosDaSemana;
