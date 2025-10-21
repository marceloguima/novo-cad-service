import "./style.css";
import { useState } from 'react';
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";        

const CardTotal = () => {
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
                    <span>Total bruto: R$ 2.000</span>
                ) : ( 
                    <span>Total bruto: R$ ***</span>
                )}
              
              {isVisible ? (
                <span>Total liquido: R$ 900</span>
                ) : (
                <span>Total liquido: R$ ***</span>)}
                
          
      </div>
            </div>
        
    );
};

export default CardTotal;
