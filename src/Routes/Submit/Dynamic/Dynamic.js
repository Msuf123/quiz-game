import style from './dynamic.module.css'
export default function Dynamic(){
    return(
        <div className={style.main}>
            <div>
                <div>
                   <span>Options You choosed:</span>

                </div>
                <div>
                    <span>Correted Option are:</span>
                </div>
            </div>
            <div>
                <span>Your Score is :</span>
            </div>
        </div>
    )
}