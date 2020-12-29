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
  const [catagory, SetCatagory] = useState<any>(9)
  const [diff, setDiff] = useState<any>(Difficulty.EASY)
  var ComboVal: number = 8;
  const total: number = 10;
  const fetchData = async () => {
    setLoading(true);
    setGameOver(false)
    const newQues = await FetchingData(total, diff, catagory)
    setQuestions(newQues)
    setScore(0)
    setUserAnswer([])
    setNumber(0)
    setLoading(false)
  };

  const answerChecking = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) { setScore(prev => prev + 1) }
      const ansobj =
      {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswer((prev) => [...prev, ansobj])
    }
  };
  const Next = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === total) {
      setGameOver(true)
    }
    else {
      setNumber(nextQuestion)
    }
  }
  const catagories: string[] = ["General Knowledge", "Books", "Film", "Music", "Musical & Theatres", "Television", "Video Game", "Board Game", "Science And Nature", "Computer", "Mathamatics", "Mythology", "Sports", "Geography", "History", "Politics", "Arts", "Celebrities", "Animals", "Vehicals", "Comics", "Gadgets", "Japnese Anime & Manga", "Cartoon & Animations"]
  return (
    <div className="App">
      <div className="main">
        <h1>Quiz App</h1>
        <hr/>
        {gameOver ?
          <div>
            <select onChange={(e) => { SetCatagory(e.target.value) }}>{catagories.map((cats) => { return (<option key={cats} value={ComboVal = ComboVal + 1}>{cats}</option>) })}</select>
            <select onChange={(e) => { setDiff(e.target.value) }} >
              <option value={Difficulty.EASY}>{Difficulty.EASY}</option>
              <option value={Difficulty.MEDIUM}>{Difficulty.MEDIUM}</option>
              <option value={Difficulty.HARD}>{Difficulty.HARD}</option>
            </select>
          </div> : null}
        {gameOver ? (
          <button onClick={fetchData}> start </button>) : null}
        {<p>Your score is: {score}</p>}
        {loading && <p>loading....</p>}
        {!loading && !gameOver ? (<RenderQuestion questionNum={number + 1} totalQues={total} question={questions[number].question} answers={questions[number].answers} userAnswer={UserAnswer ? UserAnswer[number] : undefined} callback={answerChecking} />) : null}
        {!gameOver && !loading && UserAnswer.length === number + 1 && number !== total ? (<button onClick={Next}>Next Question</button>) : null}
      </div>
    </div>
  );
}

export default App;
