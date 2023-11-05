import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './login.css'
import SocialLogin from './SocialLogin';
import imglogo from '../../public/login.svg'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
  const {userLogin}=useContext(AuthContext)
  const location = useLocation()
    const navigate = useNavigate()
  const handleLogin = e => {
      e.preventDefault()
      const form = new FormData(e.currentTarget);
      const email = form.get('email')
      const password = form.get('password')
      console.log(email, password);
     
      // create user 
      userLogin(email,password)
      .then(result => {
          console.log(result.user);
          navigate(location?.state ? location.state : '/')
          Swal.fire({
              title: 'Success',
              text: 'User Login successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
      })
      .catch(error => {
        console.error(error)
        Swal.fire({
          title: 'Error!',
          text: 'Invalid email and password',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })

  }
  return (
    <div className='min-h-screen bg-img  bg-black'>
      <div className='flex items-center pt-28 justify-between max-w-6xl mx-auto'>
        <div>
          <img className='' src={imglogo} alt="" />
        </div>
        <div className="">
          <div className="rounded-xl ">
            <div className="card w-full px-10 shadow-2xl bg-[#e0f2fe]">
              <div>
                <h1 className=" text-4xl mt-8 text-center font-bold">Please Login Now</h1>
              </div>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered" required />
                  
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="text-2xl font-semibold text-white px-16 py-3 bg-slate-800  hover:bg-[#015196] rounded-lg hover:rounded-full">Login</button>
                </div>
                <div>
                <SocialLogin></SocialLogin>
                </div>
                <div className="text-center my-3">
                  <h1 className="text-xl font-semibold">Dont have an account? <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : "text-2xl text-orange-700 underline underline-offset-2 font-bold mx-2"
                    }
                  >
                    Register
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

export default Login;