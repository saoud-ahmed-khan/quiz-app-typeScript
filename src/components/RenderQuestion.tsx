import React from 'react'
import {objAnswer} from "../App";

interface prop
{
   question:string;
   answers: string[];
   callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
   userAnswer: objAnswer | undefined;
   questionNum: number;
   totalQues:number;


}


export const RenderQuestion:React.FC <prop>= ({
    question,answers,callback,userAnswer,questionNum,totalQues
})=>
(  
    <div>
        <p>Question:{questionNum}/{totalQues}</p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map(ans=>(
                <div key={ans}>
                    <button disabled={!!userAnswer} value={ans} onClick={callback}>
                       {ans} 
                    </button>
                </div>
            ))}
        </div>
    </div>
)