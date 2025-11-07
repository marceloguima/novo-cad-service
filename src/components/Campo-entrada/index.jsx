import React from "react";
import "./style.css";

const CampoEntrada = React.forwardRef((props, ref) => {
    const { tipo, place, id, label, erro, htmlFor,  ...rest } = props;

    const mensagemErro = erro?.message;

    return (
        <div className="label-input">
            <label htmlFor={htmlFor}>{label}</label>
            <input
                type={tipo}
                placeholder={place}
                className="campo-entrada"
                id={id}
                ref={ref}
                {...rest}
            />
            <div className="caixa-erro">

            {erro && <span className="mensagem-erro">{mensagemErro}</span>}{" "}
            </div>
        </div>
    );
});

export default CampoEntrada;
