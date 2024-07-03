import logo from './logo.svg';
import './App.css';
import DemoComponent from './demo1';
import DemoComponent1 from './demo1-1';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
      <DemoComponent1 compId = {3}/>
        
       
        
       
        
      </Suspense>
      <p>keeping the break between two promises to fire itself</p>
      <Suspense fallback={<p>Loading...</p>}>
     
        <DemoComponent compId = {6}/>
       
        
       
        
      </Suspense>
    </div>
  );
}

export default App;
