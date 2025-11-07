import "./style.css";

const OverlayPoupUp = (props) => {
    return (
        <div className="overlay">
            <div className="poup-up">
                <p className={props.classNameTexto}>{props.mensagem}</p>
                {props.servico}
            </div>
        </div>
    );
};

export default OverlayPoupUp;
