import "./style.css";
import { useState } from 'react';
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";        

const CardTotal = (props) => {
const [isVisible, setIsVisible] = useState(true);


const toggleVisibility = () => {
    setIsVisible(!isVisible);
}



    return (
        <div className="card-total">
            <button className="btn-eye" onClick={toggleVisibility}>
                {isVisible ? <IoMdEyeOff /> : <IoEye />}
            </button>

            <div>
                {isVisible ? (  
                   <p className="totais">Total bruto:  <span className="total-bruto">R$ {props.valor}</span></p>
                ) : ( 
                   <p className="totais">Total bruto: R$ <span>****</span></p>
                )}
              
              {isVisible ? (
                   <p className="totais">Total líquido:<span className="total-liquido"> R$ {props.valorLiquido}</span></p>
                ) : (
                   <p className="totais">Total líquido: R$ <span>****</span></p>
                )}
                
          
      </div>
            </div>
        
    );
};

export default CardTotal;
