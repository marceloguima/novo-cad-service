import "./style.css"


const Botao = ({classe, onclick, children, type}) => {
  return (

   <button className={classe} id="btn-principal" onClick={onclick} type={type}>{children}</button>
  )
}

export default Botao
