import Navigation from "./Navigation/Navigation"
import Options from "./Options/Options"
import style from './mcq.module.css'
export default function Mcq(){
    const quesion={number:1,quesion:'Who is the prime Minister of india',options:['JawalNarNaehru','Ralhul Gandhi','Modi','Kejriwal']}
    return(
        <div className={style.main}>
            <div className={style.questionOuter}>
                    <span className={style.question}>Q{quesion.number}</span>
                    <span className={style.question}>{quesion.quesion}</span>
            </div>
            <div>
                
                {quesion.options.map((i,k)=><Options key={k} option={i}></Options>)}
            </div>
          <Navigation></Navigation>
        </div>
    )
}