import { useEffect } from "react";

const Submited = () => {
    useEffect(()=>{
        document.title="rf Study | Submitted"
    },[])
    return (
        <div>
            submitted
        </div>
    );
};

export default Submited;