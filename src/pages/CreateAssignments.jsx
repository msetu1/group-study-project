import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CreateAssignments = () => {
    const allAssignments = useLoaderData()
    const { _id } = allAssignments;
    const handleCreated = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const level = form.level.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const marks = form.marks.value;
        const groupStudy = { level,_id, description, title, date, image, marks };
        console.log(groupStudy);

        axios.post('http://localhost:5000/allasignment', groupStudy)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'User Created successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }
    return (
        <div>
            <div className="bg-gray-800 max-w-5xl mx-auto mb-20 rounded-xl ">
                <div className="mt-20 ">
                    <h1 className="text-center text-5xl font-bold text-white pt-12">Create Assignments</h1>
                </div>
                <div className=" ">
                    <form onSubmit={handleCreated} className="card-body">
                        <div className="text-end">
                            <label className="label-text font-semibold text-xl underline underline-offset-2 text-white">Choice your level : </label>
                            <select className="border bg-[#ecfeff] ml-4 px-3 rounded-lg py-2" id="cars" name="level">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>

                            </select>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl text-white">Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Name"
                                    className="input bg-[#ecfeff] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white text-whitelabel-text font-semibold text-xl">Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    className="input bg-[#ecfeff] input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-whitelabel-text font-semibold text-xl text-white">Marks</span>
                                </label>
                                <input
                                    type="text"
                                    name="marks"
                                    placeholder=" marks"
                                    className="input bg-[#ecfeff] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white label-text font-semibold text-xl">Image Url</span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="photo url"
                                    className="input bg-[#ecfeff] input-bordered" required />

                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text font-semibold text-xl">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Your description"
                                className="p-8 rounded bg-[#ecfeff]"
                                id="" cols="30"
                                rows="5">
                            </textarea>
                        </div>
                        <div className="form-control mt-6 mb-5">
                            <button type="submit" className="text-2xl font-semibold text-white px-16 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full">Created</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;