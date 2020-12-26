import { RenderQuestion } from "../RenderQuestion";

export type Question=
{
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
}
export type QuestinState=Question & {answer: string[]}
export const FetchingData= async()=>

{
    let data = await(await fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`)).json();
    console.log(data);
    return data.result.map((question:Question)=>({
        ...question,
    })
   )
    

}
const arrayShuffle=()=>
{

}

