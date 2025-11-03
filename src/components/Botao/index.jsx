import "./style.css"


const Botao = ({tag, classe, onclick, texto,  type}) => {
  return (

   <button className={classe} id="btn-principal" onClick={onclick} type={type}>{texto}</button>
  )
}

export default Botao
