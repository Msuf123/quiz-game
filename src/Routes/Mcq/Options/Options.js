import style from './options.module.css'
export default function Options({option}){
    return(
        <div className={style.main}>
         {option}
        </div>
    )
}