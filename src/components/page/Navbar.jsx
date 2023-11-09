import { NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch()
    }
    const links = <>
        <li className={`${user ? 'hidden' : "block"}`}><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/assignments"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]" : ""
            }
        >
            Assignments
        </NavLink></li>

        <li className={`${user ? 'block' : "hidden"}`}><NavLink
            to="/myAssignment"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]" : ""
            }
        >
            My Assignments
        </NavLink></li>
        <li className={`${user ? 'block' : "hidden"}`}><NavLink
            to="/createAssignments"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]" : ""
            }
        >
            Created
        </NavLink></li>
        <li className={`${user ? 'block' : "hidden"}`}><NavLink
            to="/submitted"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]" : ""
            }
        >
            Submitted
        </NavLink></li>


        <li className={`${user ? 'hidden' : "block"}`}><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]" : ""
            }
        >
            Login
        </NavLink></li>
        <li className={`${user ? 'hidden' : "block"}`}><NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]" : ""
            }
        >
            Register
        </NavLink></li>

    </>
    return (
        <div className="bg-gray-800 py-6">
            <div className="navbar px-10 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content p-2 shadow text-black lg:text-white  w-52 ">
                            {links}
                        </ul>
                    </div>
                    <div className=" lg:block hidden">
                        <div className="flex items-center gap-4">
                            <img className="w-[80px] h-[80px]" src="https://i.ibb.co/BthKg2z/logo.jpg" alt="" />
                            <h1 className="text-4xl font-berkshire_font font-semibold text-[#ea580c]">rf-Study Group</h1>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center text-xl font-semibold text-black lg:text-white space-x-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <>
                                
                                    <div className="mr-5 lg:block hidden">
                                        <img className="h-[50px] w-[50px] rounded-full" src={user?.photoUrl} title={user?.displayName} alt="" />

                                    </div>
                                    <button onClick={handleLogout} className="text-2xl font-semibold text-white px-8 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Sign up</button>
                                
                            </>
                            :
                            <div className={`${user ? 'block' : "hidden"}`}>
                                <button className="text-2xl font-semibold text-white px-8 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Login</button>
                            </div>
                    }
                </div>
            </div>
        </div>
        // bg-slate-800
    );
};

export default Navbar;