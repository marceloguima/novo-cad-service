import "./style.css";

const CampoEntrada = ({ tipo, place, classe, id, texto, htmlFor }) => {
    return (
        <div className="label-input">
            <label htmlFor={htmlFor}>{texto}</label>
            <input type={tipo} placeholder={place} className={classe} id={id}/>
        </div>
    );
};

export default CampoEntrada;
