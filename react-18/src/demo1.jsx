import { useState,useEffect } from "react";

let savedPowers = null;
console.log("Initial value of savedPowers", savedPowers)
const fetchPowers = (compId) => {
  
  let delay = 1000*compId;
 
  return new Promise((resolve, reject) => {
    console.log("Delay start",compId,delay);
    setTimeout(() => {
     
        savedPowers = [`first${compId}`,`second${compId}`]
        console.log("Delay finished",compId);
        resolve();
       }, delay)
  });
}

const DemoComponent = ({compId}) => {
  console.log(" Render DemoComponent");
const  powers = savedPowers;
  if (!powers) {
   
        throw fetchPowers(compId)
    }
  return powers.map(value => <div key={value}>{value}</div>);
}

export default DemoComponent;
