import CardServico from "../components/Card-servico";
// import Botao from "../components/Botao";
import Header from "../components/Header";
import CardTotal from "../components/Card-total";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";


// import { useContext } from "react";
// import { ServicoContext } from "../context/ServicoContext";

const ServicosDoDia = () => {
    
    // const { servico } = useContext(ServicoContext);
    // console.log(servico.descricao)

    const servico = JSON.parse(localStorage.getItem("servico") || "{}");
console.log("serviço recuparado " + servico)
console.log("oi")


    return (
        <>
            <Header card={<CardTotal />} nav={<NavBar />} />
            <main>
                <div className="services"> 
                    <CardServico
                        descricao={servico.descricao}
                        valor={"R$ " + servico.valor}
                        // data={"Data: " + servico.data}
                        // modelo={"Modelo: " + servico.modelo}
                        // placa={"placa: " + servico.placa}

                    />
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
