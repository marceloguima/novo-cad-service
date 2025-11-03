import Botao from "../../components/Botao";
import CardServico from "../../components/Card-servico";
import CardTotal from "../../components/Card-total";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import "./style.css"

const ServicoDoMes = () => {
    return (
        <>
        <Header card={<CardTotal/>} nav={<NavBar/>}/>
            <main>
                <div className="services">
                    <CardServico />
                    <CardServico />
                    <CardServico />
                    <CardServico />
                    <CardServico />
                    <CardServico />
                    <CardServico />
                    <CardServico />
                    <CardServico />
                    <CardServico />
                </div>

                <div className="buttons">
                    <Botao
                        classe="fechar-mes"
                        texto="Fechar mês"
                    />
                    <Botao
                        classe="relatorio"
                        texto="Baixar relatório"
                    />
                    <Botao
                        classe="novo-servico"
                        texto="Novo serviço"
                    />
                </div>
            </main>
        </>
    );
};

export default ServicoDoMes;
