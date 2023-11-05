import { NavLink } from 'react-router-dom';
import './register.css';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,email, password);

        // password validation 
        if (password.length < 6) {
            return Swal.fire({
                title: 'Error!',
                text: 'Please password must be at least 6 caracters',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
        else if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                title: 'Error!',
                text: 'Your password have at least one uper case charecters',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            
        }
        else if (!/[a-z]/.test(password)) {
           return Swal.fire({
                title: 'Error!',
                text: 'Your password have at least one lower case charecters',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            
        }

        // create user 
        createUser(email,password)
        .then(result => {
            console.log(result.user);
            // navigate(location?.state ? location.state : '/')
            Swal.fire({
                title: 'Success',
                text: 'User created successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!!',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })

    }
    return (
        <div className='register-bg-img min-h-screen'>
            <div className='pt-16 mx-5 lg:mx-0 pb-16 lg:pb-0'>
                <div className="lg:max-w-[34%] mx-auto">
                    <div className="rounded-xl">
                        <div className="card w-full px-10 shadow-2xl bg-[#e0f2fe]">
                            <div>
                                <h1 className=" text-4xl mt-8 text-center font-bold">Please Register Now</h1>
                            </div>
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="photo url"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="text-2xl font-semibold text-white px-16 py-3 bg-slate-800  hover:bg-[#015196] rounded-lg hover:rounded-full">Register</button>
                                </div>
                                <div className="text-center my-3">
                                    <h1 className="text-xl font-semibold">Already have an account? <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : "text-2xl text-orange-700 underline underline-offset-2 font-bold mx-2"
                                        }
                                    >
                                        Login
                                    </NavLink>
                                    </h1>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;