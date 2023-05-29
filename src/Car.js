import { useState } from "react";

  
function Car()
{
    function handleClick()
    {
        console.log("Click");
        let newVal = val;
        newVal++;
        setVal(newVal);
    }

    let [val,setVal] = useState(10);

   
    return (<div>Car {val}
    
    <div onClick={handleClick}>Click</div>
     </div>);
}

export default Car;