export var data:[];
export const FetchingData= async()=>
{
    data = await(await fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`)).json();
    console.log(data);
    return data
    

}

