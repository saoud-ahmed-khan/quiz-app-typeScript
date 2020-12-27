import React, { useState } from "react";
import "./App.css";
import { FetchingData, Difficulty, QuestionState } from "./components/api/Api";
import { RenderQuestion } from "./components/RenderQuestion";
export type objAnswer =
{
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [UserAnswer, setUserAnswer] = useState<objAnswer[]>([]);
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);

  const total: number = 10;
 

  const fetchData = async () => {
    setLoading(true);
    setGameOver(false)
    const newQues = await FetchingData(total, Difficulty.EASY)
    setQuestions(newQues)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)
  };

  const answerChecking = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) =>
   {
      if(!gameOver)
      {
        const answer=event.currentTarget.value;
        const correct= questions[number].correct_answer === answer;
        if(correct){setScore(prev=>prev+1)}
        const ansobj=
        {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer:questions[number].correct_answer,


        }
        setUserAnswer((prev)=>[...prev, ansobj])
      }
   };
  const Next = () => {
    const nextQuestion=number+1;
    if(nextQuestion===total)
    {
      setGameOver(true)
    }
    else
    {
      setNumber(nextQuestion)
    }
  }
   console.log(number)
   
  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameOver || UserAnswer.length === total ? (
        <button onClick={fetchData}> start </button>) : null}
      { <p>Your score is: {score}</p>}
      {loading && <p>loading questions</p>}
      {!loading && !gameOver ? (<RenderQuestion questionNum={number + 1} totalQues={total} question={questions[number].question} answers={questions[number].answers} userAnswer={UserAnswer ? UserAnswer[number] : undefined} callback={answerChecking} />) : null}
      {!gameOver && !loading && UserAnswer.length === number + 1 && number !== total ? (<button onClick={Next}>Next Question</button>) : null}
    </div>
  );
}

export default App;
