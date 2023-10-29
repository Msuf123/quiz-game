import { useNavigate } from "react-router-dom";
import Dynamic from "./Dynamic/Dynamic";
import StaticComp from "./StaticComp/StaticComp";
import style from './submit.module.css'
export default function Submit(){
    const nav=useNavigate()
    return(
        <div className={style.main}>
            <StaticComp></StaticComp>
            <Dynamic></Dynamic>
            <button onClick={()=>{nav('/')}}>Retake Exarm!</button>
        </div>
    )
}