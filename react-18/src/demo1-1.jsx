import { useState,useEffect } from "react";

let savedPowers1 = null;
console.log("Initial value of savedPowers1", savedPowers1)
const fetchPowers = (compId) => {
  
  let delay = 1000*compId;
  
  return new Promise((resolve, reject) => {
    console.log("Delay start1-1",compId,delay);
    setTimeout(() => {
        
        savedPowers1 = [`first${compId}`,`second${compId}`]
        console.log("Delay finished1-1",compId);
        resolve();
       }, delay)
  });
}

const DemoComponent1 = ({compId}) => {
    console.log("Render DemoComponent1-1");
const  powers = savedPowers1;
  if (!powers) {
    
        throw fetchPowers(compId)
    }
  return powers.map(value => <div key={value}>{value}</div>);
}

export default DemoComponent1;
