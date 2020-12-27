
export type Question=
{
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
}
var data: any
data=[]
export type QuestinState=Question & {answers: string[]}
export const FetchingData= async()=>

{
    data = await(await fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`)).json();
    console.log(data);
    return data.results.map((question:Question)=>({
        ...question,
        answers: arrayShuffle([...question.incorrect_answers,question.correct_answer])        
    })
   )
}
const arrayShuffle=(array:any[])=> [...array].sort(()=>Math.random()-0.5)