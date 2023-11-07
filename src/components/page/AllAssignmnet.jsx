import { Link} from "react-router-dom";
const AllAssignmnet = ({ card,handlDeleted }) => {
    const { title, image, marks, level, _id,date } =card;
   
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-2">
            <div className="relative mb-4">
                    <figure><img className="rounded-xl w-full h-[260px]" src={image} alt="" /></figure>
                    <div className="absolute ml-64 -mt-12">
                        <h1 className="lg:text-xl font-bold text-[#ea580c]">{date}</h1>
                    </div>
                </div>
                <div className="mx-5">
                    <div className="">
                        <h2 className="card-title">{title}</h2>
                        <div className="flex items-center my-3 justify-between">
                            <p className="text-xl  font-bold mb-3">Level: <span className=" text-[#ea580c]">{level}</span></p>
                            <p className="text-xl  font-bold mb-3">Marks: <span className=" text-[#ea580c]">$ {marks}</span></p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <Link to={`/view/${_id}`}>
                            <div className="flex justify-end">
                                <button className="text-base font-semibold text-white px-6 w-full py-4 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">View Assignment</button>
                            </div>
                        </Link>
                    </div>
                    <div className="flex mb-6 justify-between">
                        <Link to={`/update/${_id}`}>
                            <button className="text-base mb-4 font-semibold text-white px-6 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Updated </button>
                        </Link>
                        <div className="">
                            <button onClick={() => handlDeleted(_id)} className="text-base font-semibold text-white px-10 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Deleted</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default AllAssignmnet;