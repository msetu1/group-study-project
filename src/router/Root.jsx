import { Outlet } from "react-router-dom";
import Navbar from "../components/page/Navbar";
import Footer from "../components/page/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Toaster/>
           <Footer></Footer>
           
        </div>
    );
};

export default Root;