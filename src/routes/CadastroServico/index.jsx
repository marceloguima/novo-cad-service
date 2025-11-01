import CampoEntrada from "../../components/Campo-entrada";
import "./style.css";
import Header from "../../components/Header";
import Botao from "../../components/Botao";

const CadastroServico = () => {
    return (
        <>
            <Header nome="Cadastro de serviço" />
            <main>
                <form>
                    <CampoEntrada
                        tipo="text"
                        place="Ex: troca de..."
                        classe="campo-entrada"
                        texto="Descricão"
                        id="desc"
                        htmlFor="desc"
                    />
                    <div className="valor-data">
                        <CampoEntrada
                            tipo="number"
                            place="Ex: 120"
                            classe="campo-entrada"
                            texto="Valor"
                            id="valor"
                            htmlFor="valor"
                        />

                        <CampoEntrada
                            tipo="date"
                            place="Selecione a data"
                            classe="campo-entrada"
                            texto="Data"
                            id="data"
                            htmlFor="data"
                        />
                    </div>

                    <CampoEntrada
                        tipo="text"
                        place="Ex: NBC9I65"
                        classe="campo-entrada"
                        texto="Placa"
                        id="name"
                        htmlFor="name"
                    />
                    <CampoEntrada
                        tipo="text"
                        place="Nome do atendente da ordem de serviço"
                        classe="campo-entrada"
                        texto="Vendedor"
                        id="vend"
                        htmlFor="vend"
                    />
                    <label htmlFor="obs">Observação</label>
                    <textarea name="obs" id="obs"></textarea>

                    <div className="botoes">
                        <Botao
                            classe="botoes-padrao btn-salvar"
                            texto="Salvar"
                        />
                        <Botao classe="botoes-padrao btn-cancelar" texto="Cancelar" />
                    </div>
                </form>
            </main>
        </>
    );
};

export default CadastroServico;
