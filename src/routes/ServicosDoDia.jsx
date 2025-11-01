import CardServico from "../components/Card-servico";
import Botao from "../components/Botao";
import Header from "../components/Header";
import CardTotal from "../components/Card-total";
import NavBar from "../components/NavBar";

const ServicosDoDia = () => {
    return (
        <>

        <Header card={<CardTotal/>} nav={<NavBar/>}/>
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
            </main>
        </>
    );
};

export default ServicosDoDia;
