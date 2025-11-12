import "./servicosDoDia.css";
import CardServico from "../../components/Card-servico";
import Botao from "../../components/Botao";
import Header from "../../components/Header";
import CardTotal from "../../components/Card-total";
import NavBar from "../../components/NavBar";
import OverlayPoupUp from "../../components/poup-up";
import gifLixeira from "../../assets/gif-lixeira.gif";

// icones
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";

import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ServicosDoDia = () => {
    const [mensagemVazio, setMensagemVazio] = useState("");
    const [mensagemApagar, setMensagemApagar] = useState("");
    // Estado para armazenar qual serviço será apagado
    const [servicoParaApagar, setServicoParaApagar] = useState(null);
    const [mensagemApagando, setMensagemApagando] = useState();

    const [servicos, setServicos] = useState([]);

    // expandir cardServico
    const [expandidoIndex, setExpandidoIndex] = useState(null);

    // caso não houver uma observação do campo obs, uma mensagem agradável (o campo obs não é de preenchimento obrigatório, mas por ficar melhor o layout com a renderização
    //  do campo onde teria o texto obs, quero uma mensagem para quando for vazio)
    const [mensagemObsVazio] = useState("Nenhuma observação neste serviço.");

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

    // Calcula o total dos valores
    const totalValor = servicos.reduce((accumulator, servico) => {
        return accumulator + parseFloat(servico.valor || 0);
    }, 0);

    let valorLiquido = (totalValor * 45) / 100;

    console.log(totalValor);
    console.log("teste");

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
                        btnApagarServico={
                            <Botao
                                classe="btn-card-serv conclui-apagar"
                                children={"Sim"}
                                onclick={() => Deleta(index)}
                            />
                        }
                        btnCancelaExclusao={
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
    const Deleta = (index) => {
        // remove o serviço pelo inice
        const novosServicos = servicos.filter((_, i) => i !== index);

        // animação de lixeira
        setMensagemApagando(
            <OverlayPoupUp
                img={gifLixeira}
                mensagem="mensagemApagando..."
                altImg="gif de lixeira"
            />
        );
        setTimeout(() => {
            setServicos(novosServicos);
            setMensagemApagando("");
        }, 2800);

        // Atualiza o localStorage
        localStorage.setItem("servicos", JSON.stringify(novosServicos));
        // chama novamente a mensagem

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
            <Header
                card={
                    <CardTotal
                        valor={totalValor.toFixed(2)}
                        valorLiquido={valorLiquido.toFixed(2)}
                    />
                }
                nav={<NavBar />}
            />
            <main>
                <div className="services">
                    {mensagemApagando}

                    {mensagemApagar}
                    {servicos.length === 0 ? (
                        <p className="mensagemSemServico">{mensagemVazio}</p>
                    ) : (
                        servicos.map((servico, index) => (
                            <CardServico
                                key={index}
                                descricao={servico.descricao}
                                valor={"R$ " + servico.valor}
                                // ícone de lembrete de qual card tem obs
                                icon={<GoAlertFill />}
                                btnExpandir={
                                    <Botao
                                        classe="btn-card-serv mais-detalhes"
                                        children={
                                            expandidoIndex === index ? (
                                                <IoIosArrowUp />
                                            ) : (
                                                <IoIosArrowDown />
                                            )
                                        }
                                        onclick={() => {
                                            console.log("Expandir card", index);
                                            setExpandidoIndex(
                                                expandidoIndex === index
                                                    ? null
                                                    : index
                                            );
                                        }}
                                    />
                                }
                                expandido={expandidoIndex === index}
                                onExpandir={() =>
                                    setExpandidoIndex(
                                        expandidoIndex === index ? null : index
                                    )
                                }
                                data={servico.data}
                                modelo={servico.modelo}
                                placa={servico.placa}
                                vendedor={servico.vendedor}
                                obs={
                                    servico.obs === ""
                                        ? mensagemObsVazio
                                        : servico.obs
                                }
                                obsClassName={
                                    servico.obs === ""
                                        ? "campo-obs"
                                        : "alerta-obs"
                                }
                                // a className controla bordas e textos e o id controla um icone de fora
                                id={
                                    servico.obs === ""
                                        ? "campo-obs"
                                        : "alerta-obs"
                                }
                                btnApagarServico={
                                    <Botao
                                        classe="btn-card-serv apagar"
                                        children={<RiDeleteBin6Fill />}
                                        onclick={() =>
                                            poupUpApagar(servico, index)
                                        }
                                    />
                                }
                                btnEditarServico={
                                    <Botao
                                        classe="btn-card-serv editar"
                                        children={<MdModeEditOutline />}
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
