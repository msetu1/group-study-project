
import { useLoaderData } from "react-router-dom";
// import ViewCard from "./ViewCard";

const ViewAssignment = () => {
    const details = useLoaderData()
    const { title, image, marks, level, description } = details || {};
    return (
        <div className="max-w-5xl mx-auto my-20">
            <div className="card  bg-base-100 shadow-xl mx-5 lg:mx-0">
                <figure><img className="w-full" src={image} alt="" /></figure>
                <div className="mx-5">
                    <div className="">
                        <h2 className="card-title">{title}</h2>
                        <div className="flex items-center mt-3 justify-between">
                            <p className="text-xl  font-bold mb-3">Level: <span className=" text-[#ea580c]">{level}</span></p>
                            <p className="text-xl  font-bold mb-3">Marks: <span className=" text-[#ea580c]">$ {marks}</span></p>
                        </div>
                        <p className="mb-4">{description}</p>
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="text-base mb-4 font-semibold text-white px-4 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full " onClick={() => document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
                    <div className="mb-6">
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold  text-xl my-5 text-center">Assignment Submission Form</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">PDF Link:</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="pdflink"
                                        placeholder="Pdf link"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="text-black label-text font-semibold text-xl">Quic Text Note:</span>
                                    </label>
                                    <textarea
                                        name="quic text"
                                        placeholder="Quic text...."
                                        className="p-8 rounded border "
                                        id="" cols="30"
                                        rows="5">
                                    </textarea>
                                </div>
                                <div className="">
                                    <div className="flex justify-between">
                                        <h1 className="text-2xl font-bold">Status :</h1>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="font-semibold text-white  px-3 py-2 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full text-2xl mr-10">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;