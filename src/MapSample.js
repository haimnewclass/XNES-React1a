import { useState } from "react";

  
function MapSample()
{
    let arr = [1,2,3,4,5,6,7,8,9];
    let arr2 = [{Name:'Avi', Age:19},{Name:'Moshe', Age:23},{Name:'Yaacov', Age:44},{Name:'Avi', Age:44}]
    return (<div>Map Sample  
    

{
    arr.map((x)=>{

return(<div>{x}</div>);

}) }

-------
{

    arr2.map((x,i)=>{
        return (<div>{x.Name} - {x.Age}</div>)
    })
}




    <div >+</div>



     </div>);
}

export default MapSample;