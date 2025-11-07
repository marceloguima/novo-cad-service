import CampoEntrada from "../../components/Campo-entrada";
import "./style.css";
import Header from "../../components/Header";
import Botao from "../../components/Botao";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import OverlayPoupUp from "../../components/poup-up";

const CadastroServico = () => {
    const [msgSucesso, setMsgSucesso] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // envia form
    const submit = (dadosServico) => {
        // dados usados para renderizar o cardServico "outras páginas"
        const servicoCadastrado = {
            descricao: dadosServico.descricao,
            valor: dadosServico.valor,
            data: dadosServico.data,
            modelo: dadosServico.modelo,
            placa: dadosServico.placa,
            vendedor: dadosServico.vendedor,
            obs: dadosServico.obs,
        };

    
       
        // lê o array existente
        const servicos = JSON.parse(localStorage.getItem("servicos") || "[]")
        // add um novo serviço
        const listaServicos = [...servicos, servicoCadastrado]
        
        localStorage.setItem("servicos", JSON.stringify(listaServicos));

        console.log("Salvo no localStorage:", listaServicos);

        setTimeout(() => {
            setMsgSucesso("");
        }, 2000);
        return setMsgSucesso(
            <OverlayPoupUp mensagem="Serviço cadastrado com sucesso!" classNameTexto="sucesso"/>
        ); 
      
    };



    console.log(errors);

    // limpa campo
    const cancela = () => {};

    return (
        <>
            <Header nome="Cadastro de serviço" nav={<NavBar />} />

            <main>
                {msgSucesso}
                <form onSubmit={handleSubmit(submit)} className="form-cad-servico">
                    <CampoEntrada
                        tipo="text"
                        place="Ex: troca de..."
                        classe="campo-entrada"
                        label="Descricão"
                        id="desc"
                        htmlFor="desc"
                        erro={errors["descricao"]}
                        {...register("descricao", {
                            required: "Preencha descrição",
                        })}
                    />

                    <div className="valor-data">
                        <CampoEntrada
                            tipo="number"
                            place="Ex: 120"
                            classe="campo-entrada"
                            label="Valor"
                            id="valor"
                            htmlFor="valor"
                            erro={errors["valor"]}
                            {...register("valor", {
                                required: "Preencha valor",
                            })}
                        />

                        <CampoEntrada
                            tipo="date"
                            place="Selecione a data"
                            classe="campo-entrada"
                            label="Data"
                            id="data"
                            htmlFor="data"
                            // onChange={handleData}
                            erro={errors["data"]}
                            {...register("data", {
                                required: "Preencha data",
                            })}
                        />
                    </div>

                    <div className="valor-data">
                        <CampoEntrada
                            tipo="text"
                            place="Ex: Hilux"
                            classe="campo-entrada"
                            label="Modelo veículo"
                            id="name"
                            htmlFor="name"
                            // onChange={handlePlaca}
                            erro={errors["modelo"]}
                            {...register("modelo", {
                                required: "Preencha modelo veículo",
                            })}
                        />

                        <CampoEntrada
                            tipo="text"
                            place="Ex: NBC9I65"
                            classe="campo-entrada"
                            label="Placa"
                            id="name"
                            htmlFor="name"
                            // onChange={handlePlaca}
                            erro={errors["placa"]}
                            {...register("placa", {
                                required: "Preencha placa",
                            })}
                        />
                    </div>

                    <CampoEntrada
                        tipo="text"
                        place="Nome do atendente da ordem de serviço"
                        classe="campo-entrada"
                        label="Vendedor"
                        id="vend"
                        htmlFor="vend"
                        erro={errors["vendedor"]}
                        {...register("vendedor", {
                            required: "Preencha vendedor",
                        })}
                    />
                    <label htmlFor="obs">Observação</label>
                    <textarea
                        name="obs"
                        id="obs"
                        {...register("obs")}
                    ></textarea>

                    <div className="botoes">
                        <Botao
                            classe="botoes-padrao btn-salvar"
                            children="Salvar"
                            type="submit"
                        />
                        <Botao
                            classe="btn-cancelar"
                            children="Cancelar"
                            onclick={cancela}
                        />
                    </div>
                </form>
            </main>
        </>
    );
};

export default CadastroServico;
