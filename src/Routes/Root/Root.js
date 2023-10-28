import { Outlet } from "react-router-dom";

export default function Root(){
    return(
        <div>
            Navbar
            <Outlet></Outlet>
        </div>
    )
}