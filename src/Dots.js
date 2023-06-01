import { useState } from "react";

  
function Dots()
{
   let obj1 = {a:'1',b:'2',c:'3'};
   let obj2 = {x:'1',y:'2',z:'3'};
   let arr1 = ['aa','bb','cc'];
   let arr2 = ['xx','yy','zz'];
   let arr3 = [...arr1,...arr2];


   let obj3 = {...obj1,...obj2};
    return (<div>... 
     {arr3[4]} I Should be 1 :{obj3.a}   {obj3.b}  {obj3.z}        
     </div>);   
}

export default Dots;   