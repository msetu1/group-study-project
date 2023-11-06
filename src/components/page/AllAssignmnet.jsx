import { Link } from "react-router-dom";

const AllAssignmnet = ({ card }) => {
    const { title, image, marks, level } = card;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-2">
                <figure className="px-10 pt-5 mb-5">
                    <img src={image} alt="Shoes" className="rounded-xl h-[220px]" />
                </figure>
                <div className="mx-5">
                    <div className="">
                        <h2 className="card-title">{title}</h2>
                        <div className="flex items-center my-3 justify-between">
                            <p className="text-xl  font-bold mb-3">Level: <span className=" text-[#ea580c]">{level}</span></p>
                            <p className="text-xl  font-bold mb-3">Marks: <span className=" text-[#ea580c]">$ {marks}</span></p>
                        </div>
                    </div>
                    <div className="flex mb-6 justify-between">
                        <Link>
                            <button className="text-base mb-4 font-semibold text-white px-4 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Update Assignment</button>
                        </Link>
                        <Link>
                            <div className="flex justify-end">
                                <button className="text-base font-semibold text-white px-6 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">View Assignment</button>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default AllAssignmnet;