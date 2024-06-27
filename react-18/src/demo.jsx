import { useState,useEffect } from "react";

// function waitUntil(time){
//     return new Promise((resolve)=> setTimeout(resolve,time,"1" ));
    
// }
// let executeDelay = async ()=>{
//    return await waitUntil(5000)
// }
    
 

// export default function DemoComponent({compId}){
//     let [test,updateTest] = useState(null)
//     if(!test){
//         throw waitUntil(5000);
//     }
    
   
    
//     return <p>Test to see {test} </p>
// }
let savedPowers = null;
const fetchPowers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        savedPowers = ['first','second']
        resolve();
       }, 3000)
  });
}

const DemoComponent = () => {

let  powers = savedPowers;
  if (!powers) {
        throw fetchPowers()
    
    
  }

  return powers.map(value => <div key={value}>{value}</div>);
}

export default DemoComponent;
