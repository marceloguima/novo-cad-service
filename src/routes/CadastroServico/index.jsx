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

          const arrServicos = [];
    
        arrServicos.push(servicoCadastrado)
        console.log(arrServicos)



        localStorage.setItem("servico", JSON.stringify(servicoCadastrado));

        console.log("Salvo no localStorage:", servicoCadastrado);

        setTimeout(() => {
            setMsgSucesso("");
        }, 2500);
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
                <form onSubmit={handleSubmit(submit)}>
                    <CampoEntrada
                        tipo="text"
                        place="Ex: troca de..."
                        classe="campo-entrada"
                        label="Descricão"
                        id="desc"
                        htmlFor="desc"
                        erro={errors["descricao"]}
                        {...register("descricao", {
                            required: "Preencha este campo",
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
                                required: "Preencha este campo",
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
                                required: "Preencha este campo",
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
                                required: "Preencha este campo",
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
                                required: "Preencha este campo",
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
                            required: "Preencha este campo",
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
