
import { useContext } from "react";
import MuesumContext from "../utils/MuesumContext";


function Types() {
    const { types } = useContext(MuesumContext)
   
    return ( 
       
        <>
        {types.map(type => {
          
      <div>
            <img src={type.image} />
            <h2>{type.name}</h2>
            </div>
           
        })}
        </>
     );
}

export default Types;