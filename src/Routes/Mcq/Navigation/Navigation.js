import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import style from './navigation.module.css'
import { useEffect } from "react"
import { addUserchoice } from "../Options/final"
export default function Navigation(){
    const numberOfQuestion=useSelector((state)=>state.questions)
    const currentSelectedOption=useSelector((state)=>state.selected)
    const currentFinalSelected=useSelector((state)=>state.userChoice)
    const nav=useNavigate()
    const current=useParams()
    const dispatch=useDispatch()
    const totalNumberOfQuestions=numberOfQuestion.length
    // useEffect(()=>{
    //     console.log(currentFinalSelected)
    // })
    return(
        <div className={style.main}>
            {1<current.number?<button onClick={()=>nav(`/${Number(current.number)-1}`)}>Back</button>:null}
            {totalNumberOfQuestions>current.number?
            <button onClick={()=>{
                dispatch(addUserchoice({questionNumber:current.number,selectedChoice:currentSelectedOption}))
                nav(`/${Number(current.number)+1}`)
            }}>Next</button>:null}
            {totalNumberOfQuestions==current.number?<button onClick={()=>{dispatch(addUserchoice({questionNumber:current.number,selectedChoice:currentSelectedOption}))
                nav('/final')}}>Submit</button>:null}
        </div>
    )
}