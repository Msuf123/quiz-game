import Dynamic from "./Dynamic/Dynamic";
import StaticComp from "./StaticComp/StaticComp";
import style from './submit.module.css'
export default function Submit(){
    return(
        <div className={style.main}>
            <StaticComp></StaticComp>
            <Dynamic></Dynamic>
            <button>Retake Exarm!</button>
        </div>
    )
}