import { queryHelpers } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";
import { FetchingData, Difficulty, QuestionState } from "./components/api/Api";
import { RenderQuestion } from "./components/RenderQuestion";
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [UserAnswer, setUserAnswer] = useState<objAnswer[]>([]);
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);

  const num: number = 0;
  const total: number = 10;
  type objAnswer = 
  {
    question:string;
    answer:string;
    correct:boolean;
    correctAnswer: string;
  }

  const fetchData = async () =>
   {
      setLoading(true);
      setGameOver(false)
      const newQues= await FetchingData(total, Difficulty.EASY)
      setQuestions(newQues)
      setScore(0)
      setUserAnswer([])
      setNumber(0)
      setLoading(false)
   };
   console.log(questions)
   
  const answerChecking = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => { };
  const Next = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { };
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameOver || UserAnswer.length===total ?(
      <button onClick={fetchData}> start </button>):null}
      {!gameOver?<p>score</p>:null}
      {loading&&<p>loading questions</p>}
      {!loading && !gameOver ?( <RenderQuestion questionNum={num+1 } totalQues={total} question={questions[num].question} answers={questions[num].answers} userAnswer={UserAnswer ? UserAnswer[num]:undefined} callback={answerChecking}/>):null} 
      {!gameOver && !loading && UserAnswer.length===num+ <button onClick={Next}>Next Question</button>
    </div>
  );
}

export default App;
