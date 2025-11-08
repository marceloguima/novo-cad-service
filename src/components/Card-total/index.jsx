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
                   <p>Total bruto: R$ <span>{props.valor}</span></p>
                ) : ( 
                   <p>Total bruto: R$ <span>****</span></p>
                )}
              
              {isVisible ? (
                   <p>Total líquido: R$ <span>{props.valorLiquido}</span></p>
                ) : (
                   <p>Total líquido: R$ <span>****</span></p>
                )}
                
          
      </div>
            </div>
        
    );
};

export default CardTotal;
