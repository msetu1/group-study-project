import { useEffect, useState } from "react";
import AllAssignmnet from "../components/page/AllAssignmnet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Assignments = () => {
    const assignmentCards = useLoaderData([])
    const [deleteds,setDeleteds]=useState(assignmentCards)
    const [serchItem, setSerchItem] = useState('')

    // route name 
    useEffect(()=>{
        document.title="rf Study | Assignment"
    },[])

    // search 
    const filterData = deleteds?.filter((item) => {
        if (item && item.level) {
            return item.level.toLowerCase().includes(serchItem.toLowerCase())
        }
        return false
    })

    const handleSearch = () => {
        const searchValue = document.getElementById('searchInput').value
        setSerchItem(searchValue)
    }

    // deleted handle 
    const handlDeleted = id => {
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

    return (
        <div>
            <h1 className="lg:text-5xl text-3xl font-bold text-center my-20">All Assignment Here..</h1>
            <div className="text-end max-w-7xl mx-auto mb-5">
                <span className="text-3xl font-bold mt-2">Selected level from:</span>
                <select className="border  bg-[#ecfeff] ml-4 py-3 px-3 rounded-lg " id="searchInput" name="level">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>

                </select>
                <button onClick={handleSearch} className="text-white px-5 py-3 rounded-r-lg border-none hover:bg-black bg-[#ea580c]">Search</button>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
                {
                    filterData.map(card => <AllAssignmnet
                        key={card._id}
                        card={card}
                        handlDeleted={handlDeleted}
                    ></AllAssignmnet>)
                }
            </div>
        </div>
    );
};

export default Assignments;