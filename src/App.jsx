import "./App.css";
import Botao from "./components/Botao";
import CardServico from "./components/Card-servico";
import CardTotal from "./components/Card-total";

function App() {
    return (
        <div className="container">
            <header>
                <div className="top">
                    <h1>SERVIÇOS</h1>
                  <CardTotal />
                </div>

                <nav>
                    <ul>
                        <li className="active">HOJE</li>
                        <li>ESTA SEMANA</li>
                        <li>ESTE MÊS</li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="services">
               
                     <CardServico />
                     <CardServico />
                     <CardServico />
                     <CardServico />
                     <CardServico />
                </div>

                <div className="buttons">
                   <Botao classe="fechar-mes botoes-padrao" texto="Fechar mês"/>
                   <Botao classe="relatorio botoes-padrao" texto="Baixar relatório"/>
                <Botao classe="novo-servico botoes-padrao" texto="Novo serviço"/>
                </div>
            </main>
        </div>
    );
}

export default App;
