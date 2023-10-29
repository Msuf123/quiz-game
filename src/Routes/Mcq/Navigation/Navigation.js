import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

export default function Navigation(){
    const numberOfQuestion=useSelector((state)=>state.questions)
    
    const nav=useNavigate()
    const current=useParams()
    const totalNumberOfQuestions=numberOfQuestion.length
    return(
        <div>
            {1<current.number?<button onClick={()=>nav(`/${Number(current.number)-1}`)}>Back</button>:null}
            {totalNumberOfQuestions>current.number?
            <button onClick={()=>{
                nav(`/${Number(current.number)+1}`)
            }}>Next</button>:null}
            {totalNumberOfQuestions==current.number?<button>Submit</button>:null}
        </div>
    )
}