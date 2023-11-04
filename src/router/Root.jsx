import { Outlet } from "react-router-dom";
import Navbar from "../components/page/Navbar";
import Footer from "../components/page/Footer";

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