import Description from './Description/Description'
import Rules from './Rules/Rules'
import StartButton from './StartButton/StartButton'
import style from './default.module.css'
export default function Index(){
    return(
        <div className={style.main}>
            <div className={style.inner}>
            <Description></Description>
            <div className={style.dividingLine}></div>
            <Rules></Rules>
            <StartButton></StartButton>
            </div>
        </div>
    )
}