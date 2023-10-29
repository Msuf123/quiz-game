import { useDispatch, useSelector } from 'react-redux'
import style from './options.module.css'
import { select } from './selected'
export default function Options({option}){
   const dispatch = useDispatch()
   const state=useSelector((state)=>state.selected)
    return(
        <div className={style.main}style={state===option?{backgroundColor:'pink',boxShadow:'0px 0px 0px 0px green'}:null} onClick={()=>{
            dispatch(select(option))
        }}>
         {option}
        </div>
    )
}