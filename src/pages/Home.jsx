import Banner from "../components/page/Banner";
import ExtraSection from "../components/page/ExtraSection";
import FaqSection from "../components/page/FaqSection";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;