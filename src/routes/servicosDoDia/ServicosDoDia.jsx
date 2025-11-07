import "./servicosDoDia.css";
import CardServico from "../../components/Card-servico";
import Botao from "../../components/Botao";
import Header from "../../components/Header";
import CardTotal from "../../components/Card-total";
import NavBar from "../../components/NavBar";
import OverlayPoupUp from "../../components/poup-up";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ServicosDoDia = () => {
    const [mensagemVazio, setMensagemVazio] = useState("");
    const [mensagemApagar, setMensagemApagar] = useState("");
    // Estado para armazenar qual serviço será apagado
    const [servicoParaApagar, setServicoParaApagar] = useState(null);

    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        const servicosSalvos = JSON.parse(
            localStorage.getItem("servicos") || "[]"
        );
        setServicos(servicosSalvos);

        if (servicosSalvos.length === 0) {
            setMensagemVazio("Nenhum serviço cadastrado hoje.");
        } else {
            setMensagemVazio("");
        }
    }, []);

    useEffect(() => {
        if (servicos.length === 0) {
            setMensagemVazio("Nenhum serviço cadastrado hoje.");
        } else {
            setMensagemVazio("");
        }
    }, [servicos]);

    // monta o componente com o componente cardServico, com o serviço a
    // ser apagado, verificando se realmente o usuário quer apagar.
    const poupUpApagar = (servico, index) => {
        setServicoParaApagar(index);
        setMensagemApagar(
            <OverlayPoupUp
                mensagem="Quer mesmo apagar este serviço?"
                classNameTexto="alerta"
                servico={
                    <CardServico
                        descricao={servico.descricao}
                        valor={"R$ " + servico.valor}
                        btnMaisDetalhes={
                            <Botao
                                classe="btn-card-serv conclui-apagar"
                                children={"Sim"}
                                onclick={() => Deleta(index)}
                            />
                        }
                        btnApagarServico={
                            <Botao
                                classe="btn-card-serv cancela-apagar"
                                children={"Não"}
                                onclick={CancelaDelete}
                            />
                        }
                    />
                }
            />
        );
    };

    const [apagando, setApagando] = useState();
    // apaga
    const Deleta = (index) => {
        // remove o serviço pelo inice
        const novosServicos = servicos.filter((_, i) => i !== index);

        // animação de lixeira
        setApagando(
            <OverlayPoupUp img="/public/gif-lixeira.gif" mensagem="Apagando..." altImg="gif de lixeira"/>
        );
        setTimeout(() => {
            setServicos(novosServicos);
            setApagando("");
        }, 2800);

        // Atualiza o localStorage
        localStorage.setItem("servicos", JSON.stringify(novosServicos));

        // Fecha o popup
        setMensagemApagar("");
        setServicoParaApagar(null);
    };

    // cancela caso não queira mais apagar.
    const CancelaDelete = () => {
        setMensagemApagar("");
        setServicoParaApagar(null);
    };

    return (
        <>
            <Header card={<CardTotal />} nav={<NavBar />} />
            <main>
                <div className="services">
                   
                        {apagando}
                    
                    {mensagemApagar}
                    {servicos.length === 0 ? (
                        <p className="mensagemSemServico">{mensagemVazio}</p>
                    ) : (
                        servicos.map((servico, index) => (
                            <CardServico
                                key={index}
                                descricao={servico.descricao}
                                valor={"R$ " + servico.valor}
                                btnMaisDetalhes={
                                    <Botao
                                        classe="btn-card-serv"
                                        children={"Mais detalhes"}
                                    />
                                }
                                btnApagarServico={
                                    <Botao
                                        classe="btn-card-serv apagar"
                                        children={"Apagar"}
                                        onclick={() =>
                                            poupUpApagar(servico, index)
                                        }
                                    />
                                }
                            />
                        ))
                    )}
                </div>

                <div className="buttons">
                    <Botao classe="btn-novo-servico">
                        <Link to="/cadastroServico" classe="link-novo-servico">
                            Novo serviço
                        </Link>
                    </Botao>
                </div>
            </main>
        </>
    );
};

export default ServicosDoDia;
