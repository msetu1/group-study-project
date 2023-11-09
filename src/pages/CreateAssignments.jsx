import axios from "axios";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import './create.css';

const CreateAssignments = () => {
    const { user } = useContext(AuthContext)
    const allAssignments = useLoaderData()
    const { _id } = allAssignments;
    const handleCreated = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const level = form.level.value;
        const description = form.description.value;
        const image = form.image.value;
        const email = form.email.value;
        const date = form.date.value;
        const name = form.name.value;
        const marks = form.marks.value;
        const created = { level, _id, email, description, name, title, date, image, marks };
        console.log(created);

        axios.post('https://group-study-server-side.vercel.app/allasignment', created)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Assignment Created successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    useEffect(() => {
        document.title = "rf Study | Created"
    }, [])
    return (
        <div className="create-bg-img pb-20 pt-5">
            <div className=" border max-w-5xl mx-auto  rounded-xl ">
                <div className="">
                    <h1 className="text-center text-black text-5xl font-bold  pt-5">Create Assignments</h1>
                </div>
                <div className=" ">
                    <form onSubmit={handleCreated} className="card-body">
                        <div className="text-end">
                            <label className="label-text font-semibold text-xl underline underline-offset-2 text-black">Choice your level : </label>
                            <select className="border bg-[#ecfeff] ml-4 px-3 rounded-lg py-2" id="cars" name="level">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>

                            </select>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl text-black">Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    className="input bg-[#ecfeff] input-bordered" required />
                            </div>
                            <div className="form-control hidden">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl text-black">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={user?.displayName}
                                    className="input bg-[#ecfeff] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-black text-whitelabel-text font-semibold text-xl">Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    className="input bg-[#ecfeff] input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-whitelabel-text font-semibold text-xl text-black">Marks</span>
                                </label>
                                <input
                                    type="text"
                                    name="marks"
                                    placeholder=" marks"
                                    className="input bg-[#ecfeff] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-black label-text font-semibold text-xl">Image Url</span>
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
                                <span className="text-black label-text font-semibold text-xl">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                className="input bg-[#ecfeff] input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-black label-text font-semibold text-xl">Description</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Your description"
                                className="p-8 rounded bg-[#ecfeff]"
                                id="" cols="30"
                                rows="3">
                            </textarea>
                        </div>
                        <div className="form-control mt-6 ">
                            <button type="submit" className="text-2xl font-semibold text-white px-16 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full">Create Assignment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;