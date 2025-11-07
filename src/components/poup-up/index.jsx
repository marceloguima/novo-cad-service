import "./style.css";

const OverlayPoupUp = (props) => {
    return (
        <div className="overlay">
            <div className="poup-up">
                <img src={props.img} alt={props.altImg} />
                <p className={props.classNameTexto}>{props.mensagem}</p>
                {props.servico}
            </div>
        </div>
    );
};

export default OverlayPoupUp;
