import logo from './logo.svg';
import './App.css';
import DemoComponent from './demo1';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <DemoComponent compId = {0}/>
       
        
      </Suspense>
      <p>keeping the break between two promises to fire itself</p>
      <Suspense fallback={<p>Loading...</p>}>
       
      <DemoComponent compId = {3}/>
      
      </Suspense>

    </div>
  );
}

export default App;
