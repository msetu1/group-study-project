import { useLoaderData } from "react-router-dom";
import Feature from "../components/Features/Feature";
import Banner from "../components/page/Banner";
import ExtraSection from "../components/page/ExtraSection";
import FaqSection from "../components/page/FaqSection";
import { useEffect } from "react";

const Home = () => {
    const features=useLoaderData() 
    useEffect(()=>{
        document.title="rf Study | Home"
    },[])
    
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <Feature features={features}></Feature>
            <ExtraSection></ExtraSection>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;