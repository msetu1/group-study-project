import { useEffect } from "react";

const MyAssignment = () => {
    useEffect(()=>{
        document.title="rf Study | My Assignments"
    },[])
    return (
        <div>
            My assignment
        </div>
    );
};

export default MyAssignment;