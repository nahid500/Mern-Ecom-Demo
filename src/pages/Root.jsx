import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";



export default function Root() {
    return(
        <>
            <div>
                <Navbar/>
            </div>

            <div>
                <Outlet/>
                <ToastContainer/>
            </div>
        </>
    )
}