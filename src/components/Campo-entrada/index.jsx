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
            {erro && <span className="mensagem-erro">{mensagemErro}</span>}{" "}
        </div>
    );
});

export default CampoEntrada;
