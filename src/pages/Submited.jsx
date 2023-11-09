import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SubmittedCard from "./SubmittedCard";

const Submited = () => {
    const submittedData=useLoaderData()


    useEffect(()=>{
        document.title="rf Study | Submitted"
    },[])
    return(
          <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-8 mx-8 gap-4">
            {
                submittedData.map(submitAssignmentsCard =><SubmittedCard
                    key={submitAssignmentsCard._id}
                    submitAssignmentsCard={submitAssignmentsCard}
                ></SubmittedCard>)
            }
            </div>
            
    );
};

export default Submited;