import React from 'react'

interface prop
{
   question:string;
   answer: string[];
   callback: any;
   userAnswer: string;
   questionNum: number;
   totalQues:number;


}


export const RenderQuestion:React.FC <prop>= ({
    question,answer,callback,userAnswer,questionNum,totalQues
})=>
(
    <div>
        <p>Question:{questionNum}/{totalQues}</p>
    </div>
)