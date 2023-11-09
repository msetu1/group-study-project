import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyAssignmentCard from "./MyAssignmentCard";

const MyAssignment = () => {

    const { user } = useContext(AuthContext)
    const [myAssignments, setMyAssignment] = useState([])

    useEffect(() => {
        fetch(`https://group-study-server-side.vercel.app/myAssignment/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyAssignment(data))
    }, [user?.email])
    console.log(myAssignments)
    return (

        <div>
            <section className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-10 rounded-lg">
                {
                    myAssignments.map(myAssignment => <MyAssignmentCard
                        key={myAssignment._id}
                        myAssignment={myAssignment}
                    ></MyAssignmentCard>
                    )
                }

            </section>
        </div>

    );
};

export default MyAssignment;