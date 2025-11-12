import Botao from "../../components/Botao";
import CardServico from "../../components/Card-servico";
import CardTotal from "../../components/Card-total";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import "./style.css";

const ServicoDoMes = () => {
    return (
        <>
            <Header card={<CardTotal />} nav={<NavBar />} />
            <main>
                <div className="services">
                    <CardServico
                        descricao={objServico.descricao}
                        valor={"R$ " + objServico.valor}
                        data={"Data: " + objServico.data}
                        modelo={"Modelo: " + objServico.modelo}
                        placa={"placa: " + objServico.placa}
                        vendedor={"Vendedor: " + objServico.vendedor}
                        // componente CampoObs passado via prop, o motivo é que o componente 
                        // cadServico é usado em outra página onde não tem obs.
                        obs={<CampoObs obs={"Observação: " + objServico.obs} />}
                        btnMaisDetalhes={
                            <Botao
                                classe="btn-card-serv"
                                children={<MdOutlinePostAdd />}
                            />
                        }
                        btnApagarServico={
                            <Botao
                                classe="btn-card-serv apagar"
                                children={<RiDeleteBin6Line />}
                            />
                        }
                    />
                </div>

                <div className="buttons">
                    <Botao classe="fechar-mes" texto="Fechar mês" />
                    <Botao classe="relatorio" texto="Baixar relatório" />
                    <Botao classe="novo-servico" texto="Novo serviço" />
                </div>
            </main>
        </>
    );
};

export default ServicoDoMes;
