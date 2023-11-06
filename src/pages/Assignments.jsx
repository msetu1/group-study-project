import AllAssignmnet from "../components/page/AllAssignmnet";
import { useLoaderData } from "react-router-dom";

const Assignments = () => {
    const assignmentCards = useLoaderData([])
    // useEffect(()=>{
    //     fetch('')
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])
    return (
        <div>
            <h1 className="lg:text-5xl text-3xl font-bold text-center my-20">All Assignment :{assignmentCards.length}</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
                {
                    assignmentCards.map(card =><AllAssignmnet
                    key={card._id}
                    card={card}
                    ></AllAssignmnet>)
                }
            </div>
        </div>
    );
};

export default Assignments;