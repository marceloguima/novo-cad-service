import "./style.css";

const CampoEntrada = ({ tipo, place, id, texto, htmlFor }) => {
    return (
        <div className="label-input">
            <label htmlFor={htmlFor}>{texto}</label>
            <input type={tipo} placeholder={place} className="campo-entrada" id={id}/>
        </div>
    );
};

export default CampoEntrada;
