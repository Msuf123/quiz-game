import { useNavigate } from "react-router-dom"

export default function StartButton(){
    const nav=useNavigate()
    return(
        <div>
            <button onClick={()=>{nav('/1')}}>Attempt</button>
        </div>
    )
}