import React from 'react'

interface prop
{
   question:string;
   answers: string[];
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
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map(answer)}
        </div>
    </div>
)