import { useSelector } from 'react-redux'
import style from './dynamic.module.css'
import scoreCalculateFunction from './scoreCalculateFunction'
export default function Dynamic(){
    const userSelectedOption=useSelector((state)=>state.userChoice)
    const listOfActualOption=useSelector((state)=>state.questions)

    return(
        <div className={style.main}>
            <div>
                <div>
                   <span>Options You choosed:</span>
                   <ul>
                     {userSelectedOption.map((i,k)=><li key={k}>Q{i.questionNumber}{i.selectedChoice}</li>)}
                   </ul>
                </div>
                <div>
                    <span>Actual corret option were:</span>
                    <ul>
                        {listOfActualOption.map((i,k)=><li key={k}>Q{k}{i.correctOption}</li>)}
                    </ul>
                </div>
            </div>
            <div>
                <span>Your Score is :{scoreCalculateFunction(userSelectedOption,listOfActualOption)}</span>
            </div>
        </div>
    )
}