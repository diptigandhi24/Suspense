import logo from './logo.svg';
import './App.css';
import DemoComponent from './demo';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <DemoComponent compId = {"1"}/>
      </Suspense>

    </div>
  );
}

export default App;
