import { useDispatch, useSelector } from "react-redux"
import Navigation from "./Navigation/Navigation"
import Options from "./Options/Options"
import style from './mcq.module.css'
import { useParams } from "react-router-dom"
import { addUserchoice } from "../Mcq/Options/final"
import { select } from '../Mcq/Options/selected'
import { useEffect } from "react"
export default function Mcq(){
    
    const totalData=useSelector((state)=>state.questions)
    const currentQuestionNumber=useParams()
    const question=totalData[Number(currentQuestionNumber.number)-1]
    const dispatch=useDispatch()
    const current=useParams()
    useEffect(()=>{
    dispatch(addUserchoice({questionNumber:current.number,selectedChoice:null}))
    dispatch(select(null))},[])
    return(
        <div className={style.main}>
            <div className={style.questionOuter}>
                    <span className={style.question}>Q{currentQuestionNumber.number}</span>
                    <span className={style.question}>{question.question}</span>
            </div>
            <div>
                
                {question.options.map((i,k)=><Options key={k} option={i}></Options>)}
            </div>
          <Navigation></Navigation>
        </div>
    )
}