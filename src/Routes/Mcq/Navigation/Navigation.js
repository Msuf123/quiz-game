import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import style from './navigation.module.css'
import { addUserchoice } from "../Options/final"
export default function Navigation(){
    const numberOfQuestion=useSelector((state)=>state.questions)
    const currentSelectedOption=useSelector((state)=>state.selected)
    
    const nav=useNavigate()
    const current=useParams()
    const dispatch=useDispatch()
    const totalNumberOfQuestions=numberOfQuestion.length
    return(
        <div className={style.main}>
    
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