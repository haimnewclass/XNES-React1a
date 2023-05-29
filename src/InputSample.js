import { useState } from "react"

function InputSample()
{
    const [val,setVal] = useState("");

    return (<div>

        <input value={val} onChange={(event)=>{
            setVal(event.target.value);
            
            console.log(event.target.value);
        }} />
    </div>)
}

export default InputSample;