import React, { useState } from 'react';
import "./App.css"
import { FetchingData ,Difficulty} from "./components/api/Api";
import { RenderQuestion } from './components/RenderQuestion';
function App() {
  const [loading,setLoading]= useState(false)
  const [questions,setQuestions]= useState([])
  const [UserAnswer, setUserAnswer] = useState([])
  const [number,setNumber] =useState(0)
  const [gameOver, setGameOver]= useState(true)
  const [score,setScore]= useState (0)
  
  const num:number=0
  const total:number=10
  console.log(FetchingData(total, Difficulty.EASY ))

  const fetchData= async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{}
  const answerChecking=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{}
  const Next=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{}
  return (
    <div className="App">
     <h1>Quiz App</h1>    
      <button onClick={fetchData}> start </button>
      <p>score</p>
      <p>loading questions</p>
      {/* <RenderQuestion questionNum={num+1 } totalQues={total} question={questions[num].question} answers={questions[num].answers} userAnswer={UserAnswer ? UserAnswer[num]:undefined} callback={answerChecking} /> */}
      <button onClick={Next}>Next Question</button>
         
    </div>
  );
}

export default App;
