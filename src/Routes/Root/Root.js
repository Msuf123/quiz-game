import { Outlet } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import style from './root.module.css'
export default function Root(){
    return(
        <div className={style.main}>
           <TopBar></TopBar>
            <Outlet></Outlet>
            
        </div>
    )
}