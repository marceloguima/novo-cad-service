import CampoEntrada from "../../components/Campo-entrada";
import "./style.css";
import Header from "../../components/Header";
import Botao from "../../components/Botao";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";

// import { useContext } from "react";
// import { ServicoContext } from "../../context/ServicoContext";

const CadastroServico = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // const { setServico } = useContext(ServicoContext);

    // envia form
    const submit = (dadosServico) => {
        // console.log(dadosServico);
        // dados usados para renderizar o cardServico "outras páginas"
        const servicoCadastrado = {
            descricao: dadosServico.descricao,
            valor: dadosServico.valor,
            data: dadosServico.data,
            modelo: dadosServico.modelo,
            placa: dadosServico.placa,
        };
        // setServico(servico);
        // console.log(servico.descricao)
        // console.log(servico.valor)
        localStorage.setItem("servico", JSON.stringify(servicoCadastrado));
        console.log("Salvo no localStorage:", servicoCadastrado);
    };

    console.log(errors);

    // limpa campo
    const cancela = () => {};

    return (
        <>
            <Header nome="Cadastro de serviço" nav={<NavBar />} />
            <main>
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
                    <textarea name="obs" id="obs"></textarea>

                    <div className="botoes">
                        <Botao
                            classe="botoes-padrao btn-salvar"
                            texto="Salvar"
                            type="submit"
                        />
                        <Botao
                            classe="btn-cancelar"
                            texto="Cancelar"
                            onclick={cancela}
                        />
                    </div>
                </form>
            </main>
        </>
    );
};

export default CadastroServico;
