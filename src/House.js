import { useState } from "react";

  
function House()
{
    function handleClick1()
    {
        console.log("Click");
        let newVal = val1;
        newVal+=3;
        setVal1(newVal);
    }

    let [val1,setVal1] = useState(0);
    let [val2,setVal2] = useState(0);

   
    return (<div>House
    
    <div onClick={handleClick1}>Click - {val1}</div>
    <div onClick={()=>{

        console.log("Click");
        let newVal = val2;
        newVal+=10;
        setVal2(newVal);
        setVal1(val1+3);

    }}>Click - {val2}</div>
     </div>);
}

export default House;