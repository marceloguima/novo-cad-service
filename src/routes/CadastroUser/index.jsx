import "./style.css";
import CampoEntrada from "../../components/Campo-entrada";
import Botao from "../../components/Botao";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { useState } from "react";
import OverlayPoupUp from "../../components/poup-up";
import Spner from "../../components/spinerCarregamento";

const Cadastro = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [mensagemSucesso, setMensagemSucesso] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // verifica valor de senha para validar se coincide com confirma senha
    const senha = watch("senha");

    const submitUser = async (dadosUser) => {
        setIsLoading(true);
        setMensagemSucesso("");

        setIsLoading(true);
        setMensagemSucesso("");

        try {
            const resposta = await fetch("http://localhost:3001/usuarios", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosUser),
            });

            // porta
            // json-server --watch db.json --port 3001
            if (resposta.ok) {
                setIsLoading(false);
                setMensagemSucesso(
                    <OverlayPoupUp
                        mensagem="Cadastrado com sucesso!"
                        classNameTexto="sucesso"
                    />
                );
                setTimeout(() => {
                    setMensagemSucesso("");
                }, 3000);
            } else {
                setIsLoading(false);

                setMensagemSucesso(
                    <OverlayPoupUp
                        mensagem="Erro ao cadastrar. Tente Novamente. "
                        classNameTexto="erro"
                    />
                );
                setTimeout(() => {
                    setMensagemSucesso("");
                }, 3000);
            }
        } catch (error) {
            setIsLoading(false);
            setMensagemSucesso(
                <OverlayPoupUp
                    mensagem="Erro na comunicação com o servidor. Tente novamente mais tarde."
                    classNameTexto="erro"
                />
            );
            setTimeout(() => {
                setMensagemSucesso("");
            }, 2000);
        }

        const userCadastrado = {
            nome: dadosUser.nome,
            email: dadosUser.email,
            senha: dadosUser.senha,
            confirmeSenha: dadosUser.confirmeSenha,
            comissao: dadosUser.comissao,
        };

        console.log(userCadastrado);
    };

    return (
        <>
            <Header nome="Cadastre-se" />
            <main>
                {isLoading && (
                    <OverlayPoupUp
                        iconSpiner={<Spner />}
                        mensagem="Enviando dados."
                        classNameTexto="mensagem-enviando"
                    />
                )}
                <p>{mensagemSucesso}</p>
                <form onSubmit={handleSubmit(submitUser)}>
                    {/* esse componente é composto por label e input */}
                    <CampoEntrada
                        label="Nome"
                        tipo="text"
                        place="Digite seu primeiro nome"
                        texto="Nome"
                        id="name"
                        htmlFor="name"
                        erro={errors["nome"]}
                        {...register("nome", {
                            required: "Por favor informe seu nome",
                        })}
                    />
                    <CampoEntrada
                        label="E-mail"
                        tipo="e-mail"
                        place="@gmail.com"
                        texto="E-mail"
                        id="e-mail"
                        htmlFor="e-mail"
                        erro={errors["email"]}
                        {...register("email", {
                            required: "Por favor informe seu e-mail",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Por favor informe um e-mail válido",
                            },
                        })}
                    />

                    <CampoEntrada
                        label="Senha"
                        tipo="password"
                        place="$g#M27"
                        texto="Senha"
                        id="senha"
                        htmlFor="senha"
                        erro={errors["senha"]}
                        {...register("senha", {
                            required: "Por favor crie uma senha",
                            minLength: {
                                value: 6,
                                message:
                                    "A senha deve ter pelo menos 6 caracteres",
                            },
                            validate: (value) => {
                                const temLetra = /[a-zA-Z]/.test(value);
                                const temNumero = /[0-9]/.test(value);
                                const temEspecial =
                                    /[!@#$%^&*(),.?":{}|<>]/.test(value);
                                return (
                                    (temLetra && temNumero && temEspecial) ||
                                    "Deve conter letras, números e caracteres especiais."
                                );
                            },
                        })}
                    />

                    <CampoEntrada
                        label="Confirme a senha"
                        tipo="password"
                        place="$g#M27"
                        texto="Confirme a senha"
                        id="confirmeSenha"
                        htmlFor="confirmeSenha"
                        erro={errors["confirmeSenha"]}
                        {...register("confirmeSenha", {
                            required: "Por favor confirme a senha criada",
                            validate: (value) =>
                                value === senha || "As senhas não coincidem",
                        })}
                    />

                    <CampoEntrada
                        label="Comissão sobre o serviço"
                        tipo="number"
                        place="50"
                        texto="Comissão sobre o serviço"
                        id="comissao"
                        htmlFor="comissao"
                        erro={errors["comissao"]}
                        {...register("comissao", {
                            required: "Por favor informe a comissão",
                        })}
                    />

                    <Botao
                        classe="botoes-padrao cadastrar"
                        children="Cadastrar"
                    />
                    <p className="check-count">
                        Já tem uma conta? <Link to="/login">Entrar</Link>
                    </p>
                </form>
            </main>
        </>
    );
};

export default Cadastro;
