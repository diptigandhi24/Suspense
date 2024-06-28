import { useState,useEffect } from "react";

let savedPowers = null;
console.log("Initial value of savedPowers", savedPowers)
const fetchPowers = (compId) => {
  
  let delay = 3000*compId;
  console.log("Delay start",compId,delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Before assigning", compId);
        savedPowers = [`first${compId}`,`second${compId}`]
        console.log("Delay finished",compId);
        resolve();
       }, delay)
  });
}

const DemoComponent = ({compId}) => {

const  powers = savedPowers;
  if (!powers) {
        throw fetchPowers(compId)
    }
  console.log("Before rendering the save powers value",powers)
  return powers.map(value => <div key={value}>{value}</div>);
}

export default DemoComponent;
