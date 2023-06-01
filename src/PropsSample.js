import { useState } from "react";
 
  
function PropsSample(props)
{
    
   const [ct,setCt] = useState(0);

    return (<div>
     PropsSample
     <hr/>
    Size: {props.Size} Description: {props.Description}
   

   <div onClick={()=>{
    let i = ct;
    i++;
    props.onAddItem(i);
    setCt(i);

   }}>+ {ct} </div>
   
     </div>);
}

export default PropsSample;