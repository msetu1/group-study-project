
import { Link, useLoaderData } from "react-router-dom";
// import ViewCard from "./ViewCard";

const ViewAssignment = () => {
    const details =useLoaderData()
    const { title, image, marks, level,description} = details || {};
    return (
        <div className="max-w-5xl mx-auto my-20">
           <div className="card  bg-base-100 shadow-xl mx-5 lg:mx-0">
                <figure><img className="w-full" src={image} alt="" /></figure>
                <div className="mx-5">
                    <div className="">
                        <h2 className="card-title">{title}</h2>
                        <div className="flex items-center mt-3 justify-between">
                            <p className="text-xl  font-bold mb-3">Level: <span className=" text-[#ea580c]">{level}</span></p>
                            <p className="text-xl  font-bold mb-3">Marks: <span className=" text-[#ea580c]">$ {marks}</span></p>
                        </div>
                        <p className="mb-4">{description}</p>
                    </div>
                    <div className="flex mb-6 justify-between">
                        <Link>
                            <button className="text-base mb-4 font-semibold text-white px-4 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Take Assignment</button>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;