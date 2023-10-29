import { useNavigate } from "react-router-dom"
import style from './startbutton.module.css'
export default function StartButton(){
    const nav=useNavigate()
    return(
        <div className={style.main}>
            <button onClick={()=>{nav('/1')}}>Attempt</button>
        </div>
    )
}