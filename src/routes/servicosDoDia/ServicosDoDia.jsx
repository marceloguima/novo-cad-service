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


    const [objServico, setObjServico] = useState(() =>
        JSON.parse(localStorage.getItem("servico") || "{}")
    );

    useEffect(() => {
        const servico = JSON.parse(localStorage.getItem("servico") || "{}");
        if (!servico || Object.keys(servico).length === 0) {
            setMensagemVazio("Nenhum serviço cadastrado hoje.");
        } else {
            setMensagemVazio("");
        }
    }, [objServico]);

    // monta o componente com o componente cardServico, com o serviço a 
    // ser apagado, verificando se realmente o usuário quer apagar.
    const poupUpApagar = () => {
        return setMensagemApagar(
            <OverlayPoupUp
                mensagem="Quer mesmo apagar este serviço?"
                classNameTexto="alerta"
                servico={
                    <CardServico
                        descricao={objServico.descricao}
                        valor={"R$ " + objServico.valor}
                        btnMaisDetalhes={
                            <Botao
                                classe="btn-card-serv conclui-apagar"
                                children={"Sim"}
                                onclick={Deleta}
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

    // apaga 
    const Deleta = () => {

    };

    // cancela caso não queira mais apagar.
    const CancelaDelete=()=>{
        setMensagemApagar("")
    }

    return (
        <>
            <Header card={<CardTotal />} nav={<NavBar />} />
            <main>
                <div className="services">
                    {mensagemApagar}
                    {!objServico || Object.keys(objServico).length === 0 ? (
                        <p className="mensagemSemServico">{mensagemVazio}</p>
                    ) : (
                        <CardServico
                            descricao={objServico.descricao}
                            valor={"R$ " + objServico.valor}
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
                                    onclick={poupUpApagar}
                                />
                            }
                        />

                        
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
