
export type Question=
{
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
}
export enum Difficulty
{
    EASY="easy",
    MEDIUM="medium",
    HARD = "hard"
}
var data: any
data=[]
export type QuestionState=Question & {answers: string[]}
export const FetchingData= async(amount:number , difficulty:Difficulty)=>

{
    data = await(await fetch(`https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`)).json();
    return data.results.map((question:Question )=>({
        ...question,
        answers: arrayShuffle([...question.incorrect_answers,question.correct_answer])        
    })
   )
}
const arrayShuffle=(array:any[])=> [...array].sort(()=>Math.random()-0.5)