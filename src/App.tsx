import React from 'react';
import "./App.css"
import { FetchingData } from "./components/api/Api";
import { RenderQuestion } from './components/RenderQuestion';
function App() {
  const fetchData= async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{}
  const answerChecking=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{}
  const Next=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{}
  return (
    <div className="App">
     <h1>Quiz App</h1>    
      <button onClick={fetchData}> start </button>
      <p>score</p>
      <p>loading questions</p>
      <RenderQuestion/>
      <button onClick={Next}>Next Question</button>
         
    </div>
  );
}

export default App;
