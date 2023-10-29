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
                <div className={style.matchingresultInner}>
                   <span className={style.matchingresultInnerHeading}>Options You choosed:</span>
                   <ul>
                     {userSelectedOption.map((i,k)=><li key={k}>Q{i.questionNumber}{i.selectedChoice===null?'\)'+'Not Selected':'\)'+i.selectedChoice}</li>)}
                   </ul>
                </div>
                <div className={style.matchingresultInner}>
                    <span className={style.matchingresultInnerHeading}>Actual corret option were:</span>
                    <ul>
                        {listOfActualOption.map((i,k)=><li key={k}>Q{k+1}{'\)'+i.correctOption}</li>)}
                    </ul>
                </div>
            </div>
            <div className={style.finalResult}>
                <span className={style.scoreInPercentage}>Your Score is :{Math.round((correctOption/listOfActualOption.length)*100)}%</span>
                <span className={style.correctAnswer}>Number of correct answer:{correctOption}</span>
                <span className={style.unattempted}>Number of unattempted option:{unattemptedOption}</span>
            </div>
        </div>
    )
}