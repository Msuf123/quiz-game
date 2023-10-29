import { useDispatch } from 'react-redux'
import style from './options.module.css'
import { select } from './selected'
export default function Options({option}){
   const dispatch = useDispatch()
   
    return(
        <div className={style.main} onClick={()=>{
            dispatch(select(option))
        }}>
         {option}
        </div>
    )
}