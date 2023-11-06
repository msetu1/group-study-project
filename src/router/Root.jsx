import { Outlet } from "react-router-dom";
import Footer from "../components/page/Footer";
import Navbar from "../components/page/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
           
        </div>
    );
};

export default Root;