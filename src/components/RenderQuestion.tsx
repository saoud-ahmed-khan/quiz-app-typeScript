import React from 'react'

interface prop
{
   question:string;
   answers: string[];
   callback: any;
   userAnswer: any;
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
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                       {ans} 
                    </button>
                </div>
            ))}
        </div>
    </div>
)