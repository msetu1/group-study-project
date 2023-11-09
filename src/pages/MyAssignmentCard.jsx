
const MyAssignmentCard = ({myAssignment}) => {
    const {obtainMarks,title,feedback,marks}=myAssignment||{}
    return (
        <div className="px-2 py-4 bg-white shadow-lg rounded-md ">
                    
                    <h2 className="text-center text-2xl font-bold mt-4">
                        Title :
                        <span className="font-medium"> {title}</span>
                    </h2>
                    <h2 className="text-center text-2xl font-bold mt-4">
                        Assignment Status : complite
                        <span className="font-medium"> {}</span>
                    </h2>
                    <div className=" w-[90%] mx-auto flex justify-between px-3 items-center mt-4">
                        <div className="flex items-center">
                            <p className="font-semibold text-xl">Marks : {marks}<span></span></p>
                        </div>
                        <div className="flex items-center">
                            <p className="font-semibold text-xl">Obtain Marks : {obtainMarks}<span></span></p>
                        </div>
                    </div>
                    <h2 className="text-center text-2xl font-bold mt-4">
                        Feedback :{feedback}
                        
                    </h2>
                </div>
    );
};

export default MyAssignmentCard;