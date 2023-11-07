import FeatureCard from "./FeatureCard";

const Feature = ({ features }) => {
    return (
        <div className="mb-28">
            <div className="mt-10">
                <h1 className="text-5xl text-center font-bold underline underline-offset-3 text-[#ea580c]">Our Feature</h1>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
                {
                    features?.map(feture=><FeatureCard
                    key={feture._id}
                    feature={feture}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;