export default function scoreCalculateFunction(listOfActualOptionUserSelected,correctedOption){
    let correctCount=0;
    let unAttemptedQuestion=0;
    console.log(listOfActualOptionUserSelected,correctedOption)
    for(let i=0;i<listOfActualOptionUserSelected.length;i++){
        console.log(listOfActualOptionUserSelected[i].selectedChoice)
        
        if(listOfActualOptionUserSelected[i].selectedChoice===correctedOption[i].correctOption){
           
            correctCount++;
        }
        else if(listOfActualOptionUserSelected[i].selectedChoice===null){
            unAttemptedQuestion++
         
        }

    }
    
    return {correctCount,unAttemptedQuestion}
}