export default function scoreCalculateFunction(listOfActualOption,correctedOption){
    console.log(listOfActualOption,correctedOption)
    let correctCount=0;
    let unAttemptedQuestion=0;
    for(let i=0;i<listOfActualOption.length;i++){
        if(correctedOption[i].selectedChoice===listOfActualOption[i].correctOption){
            correctCount++;
        }
        else if(correctedOption[i].selectedChoice===null){
         unAttemptedQuestion++;
        }
    }
    console.log(unAttemptedQuestion)
    return correctCount
}