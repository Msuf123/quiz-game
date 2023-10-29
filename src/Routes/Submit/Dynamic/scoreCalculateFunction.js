export default function scoreCalculateFunction(listOfActualOption,correctedOption){
    let correctCount=0;
    let unAttemptedQuestion=0;
    for(let i=0;i<listOfActualOption.length;i++){
    
       
        if(listOfActualOption[i].selectedChoice===correctedOption[i].correctOption){
           
            correctCount++;
        }
        else if(correctedOption[i].selectedChoice==null){
            unAttemptedQuestion++
         
        }
    }
    
    return {correctCount,unAttemptedQuestion}
}