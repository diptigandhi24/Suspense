import { useState,useEffect } from "react";

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
