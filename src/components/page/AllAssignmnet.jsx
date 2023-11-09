import { MdOutlineDeleteForever } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { motion } from "framer-motion"
const AllAssignmnet = ({ card, setDeleteds, deleteds }) => {
    const { title, image, marks, email, level, _id, date, description } = card;
    const { user } = useContext(AuthContext)

    // deleted handle 
    const handlDeleted = id => {
        if (email === user.email) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:5000/allasignment/${id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Assignment Deleted SuccsessFully",
                                    icon: "success"
                                });
                                const remaining = deleteds?.filter(item => item._id !== id)
                                setDeleteds(remaining);
                            }
                        })
                }

            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can only delete assignments you have created!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

    }

    return (
        <motion.div
            whileHover={{
                scale: 0.9,
                transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="card bg-base-100 shadow-xl mx-2 h-[520px]">
                <div className="relative mb-4">
                    <figure><img className="rounded-xl w-full h-[260px]" src={image} alt="" /></figure>
                    <div className="absolute ml-64 -mt-12">
                        <h1 className="lg:text-xl font-bold text-[#ea580c]">{date}</h1>
                    </div>
                </div>
                <div className="mx-5">
                    <div className="">
                        <h2 className="card-title">Title: {title}</h2>
                        <p className="my-3">{description}</p>
                        <div className="flex items-center my-3 justify-between">
                            <p className="text-xl  font-bold mb-3">Level: <span className=" text-[#ea580c]">{level}</span></p>
                            <p className="text-xl  font-bold mb-3">Marks: <span className=" text-[#ea580c]">{marks}</span></p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-5">
                        <div className="mb-5">
                            <Link to={`/view/${_id}`}>
                                <div className="flex justify-end">
                                    <button className="text-base font-semibold text-white px-6 py-4 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">View Assignment</button>
                                </div>
                            </Link>
                        </div>
                        <div className="flex mb-6 items-center gap-4">
                            <Link to={`/update/${_id}`}>
                                <button className=" font-semibold text-2xl px-3 py-2 text-[#015196]  hover:bg-black rounded-lg hover:rounded-full "><HiOutlinePencilSquare></HiOutlinePencilSquare> </button>
                            </Link>
                            <div className="">
                                <button onClick={() => handlDeleted(_id)} className=" font-semibold text-white  px-3 py-2 bg-red-600 hover:bg-black rounded-lg hover:rounded-full text-2xl"><MdOutlineDeleteForever></MdOutlineDeleteForever></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>

    );
};

export default AllAssignmnet;