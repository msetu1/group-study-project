import { Outlet } from "react-router-dom";
import Navbar from "../components/page/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;