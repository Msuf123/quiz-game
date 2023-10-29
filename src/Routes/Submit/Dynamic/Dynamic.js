import { useSelector } from 'react-redux'
import style from './dynamic.module.css'
import scoreCalculateFunction from './scoreCalculateFunction'
import { useEffect, useState } from 'react'
export default function Dynamic(){
    const userSelectedOption=useSelector((state)=>state.userChoice)
    const listOfActualOption=useSelector((state)=>state.questions)
    const [correctOption,setCorrectOption]=useState()
    const [unattemptedOption,setUnattemptedOption]=useState()
    useEffect(()=>{
        const{correctCount,unAttemptedQuestion}=scoreCalculateFunction(userSelectedOption,listOfActualOption)
        setCorrectOption(correctCount)
        setUnattemptedOption(unAttemptedQuestion)
    },[])
    return(
        <div className={style.main}>
            <div className={style.matchingresult}>
                <div>
                   <span>Options You choosed:</span>
                   <ul>
                     {userSelectedOption.map((i,k)=><li key={k}>Q{i.questionNumber}{i.selectedChoice===null?'Not Selected':i.selectedChoice}</li>)}
                   </ul>
                </div>
                <div>
                    <span>Actual corret option were:</span>
                    <ul>
                        {listOfActualOption.map((i,k)=><li key={k+1}>Q{k}{i.correctOption}</li>)}
                    </ul>
                </div>
            </div>
            <div>
                <span>Your Score is :{Math.round((correctOption/listOfActualOption.length)*100)}%</span>
                <span>Number of correctAnswer:{correctOption}</span>
                <span>Number of unattemptedOption:{unattemptedOption}</span>
            </div>
        </div>
    )
}