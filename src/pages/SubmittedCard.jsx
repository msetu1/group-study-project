import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SubmittedCard = ({ submitAssignmentsCard }) => {
    const { title, marks, name, _id } = submitAssignmentsCard || {}
    const { user } = useContext(AuthContext)




    const handlesubmitmark = e => {
        e.preventDefault()
        const form = e.target;
        const obtainMarks = form.obtainMarks.value;
        const feedback = form.feedback.value;
        const title = form.title.value;
        // const marks = form.marks.value;
        const email = form.email.value;
        const submitted = { obtainMarks, feedback, email, title, marks }

        fetch('https://group-study-server-side.vercel.app/myAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitted)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Assignment Form Submited successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }

    const [giveMarkAssignmentCard, setGiveMarkAssignmentCard] = useState(0)
    const handleGiveMark = _id => {
        fetch(`https://group-study-server-side.vercel.app/submittedAssignment/${_id}`)
            .then(res => res.json())
            .then(data => setGiveMarkAssignmentCard(data))
        console.log(_id)

    }
    // console.log(giveMarkAssignmentCard)
    const { pdflink, quictext } = giveMarkAssignmentCard
    // console.log(giveMarkAssignmentCard);
    // console.log(pdflink,quictext,title,marks)

    return (

        < div className="bg-yellow-50 rounded-xl shadow-xl py-4 px-2" >
            <h2 className="text-center text-xl font-bold mt-4">
                Title :
                <span id="titleName" className="font-medium text-lg">{title}</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
                <h2 className="text-center text-2xl font-semibold mt-4 px-2 py-1">assignment marks :{marks}</h2>
            </div>
            <div className="flex items-center justify-center gap-3">
                <h2 className="text-center text-2xl font-semibold mt-4 px-2 py-1">examinee name :{name}</h2>
            </div>

            {/* modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <div className="flex flex-col justify-center mt-3 items-center">
                <button className="px-3 rounded-md border border-black py-2 text-center bg-stone-500 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}><span onClick={() => handleGiveMark(_id)}>Give Mark</span></button>
            </div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box bg-gray-100">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handlesubmitmark} >
                        <div className="space-y-3 ">
                            <h3 className="font-semibold text-xl">Google  Drive Link or PDF file :{pdflink} </h3>
                            <h3 className="font-semibold text-xl">Note : {quictext}</h3>
                            <div className="flex items-center">
                                <h2 className="font-semibold text-xl">Marks :{marks}</h2> <input className="line ml-4 w-20 rounded-md pl-3" type="number" name="obtainMarks" />
                            </div>

                            <div className="space-y-1 mt-8 hidden">
                                <h3 className="text-lg font-semibold ml-4">User Email :</h3>
                                <input
                                    className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    id=""
                                    placeholder="User Email"
                                // defaultValue={data.img}
                                />
                            </div>
                            <div className="space-y-1 mt-8 hidden">
                                <h3 className="text-lg font-semibold ml-4">Title :{title}</h3>
                                <input
                                    className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                    type="text"
                                    name="title"
                                    defaultValue={title}
                                    id=""
                                    placeholder="title"
                                // defaultValue={data.img}
                                />
                            </div>
                            <div className="space-y-1 mt-8 ">
                                <h3 className="font-semibold text-xl">Feedback :</h3>
                                <textarea
                                    className="border border-gray-300 rounded-lg p-8 md:w-[85%] w-[90%] md:ml-0 ml-4"
                                    name="feedback"
                                    id=""
                                    // cols="lg:65"
                                    rows="4"
                                    placeholder="feedback"
                                // defaultValue={data.description}
                                ></textarea>
                            </div>
                            <div className="flex justify-center items-center">
                                <button type="submit" className="btn bg-gray-300 font-semibold">Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
            </dialog>


        </div >

    );
};

export default SubmittedCard;