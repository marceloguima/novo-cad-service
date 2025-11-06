import "./servicosDoDia.css"
import CardServico from "../../components/Card-servico";

// import Botao from "../components/Botao";
import Header from "../../components/Header";
import CardTotal from "../../components/Card-total";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// import { useContext } from "react";
// import { ServicoContext } from "../context/ServicoContext";

const ServicosDoDia = () => {
    const [mensagem, setMensagem] = useState("");

    const [objServico, setObjServico] = useState(() =>
        JSON.parse(localStorage.getItem("servico") || "{}")
    );

    useEffect(() => {
        const servico = JSON.parse(localStorage.getItem("servico") || "{}");
        if (!servico || Object.keys(servico).length === 0) {
            setMensagem("Nenhum serviço cadastrado hoje.");
        } else {
            setMensagem("");
        }
    }, [objServico]);

    return (
        <>
            <Header card={<CardTotal />} nav={<NavBar />} />
            <main>
                <div className="services">
                    {(!objServico ||
                    Object.keys(objServico).length === 0 ||
                    objServico.descricao === undefined) ? (
                            <p className="mensagemSemServico">{mensagem}</p>                        
                    ) : (
                        
                        <CardServico
                            descricao={objServico.descricao}
                            valor={"R$ " + objServico.valor}
                            data={"Data: " + objServico.data}
                            modelo={"Modelo: " + objServico.modelo}
                            placa={"placa: " + objServico.placa}
                            vendedor={"Vendedor: " + objServico.vendedor}
                            obs={"Observação: " + objServico.obs}
                        />
                    )}
                </div>

                <div className="buttons">
                    <Link to="/cadastroServico" classe="novo-servico">
                        Novo serviço
                    </Link>
                </div>
            </main>
        </>
    );
};

export default ServicosDoDia;
