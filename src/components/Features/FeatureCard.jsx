
const FeatureCard = ({ feature }) => {
    const { title, date, image, description } = feature || {}
    return (
        <div className="">
            <div className="card card-compact h-[400px] mx-8 lg:mx-0 bg-base-100 shadow-xl">
                <div className="relative">
                    <figure><img className="w-full h-[270px] rounded-t-xl" src={image} alt="" /></figure>
                    <div className="absolute ml-64 -mt-12">
                        <h1 className="lg:text-xl font-bold text-[#ea580c]">{date}</h1>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;