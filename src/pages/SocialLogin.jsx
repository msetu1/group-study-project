import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";


const SocialLogin = () => {
    // const { googleLogin } = useContext(AuthContext);
    // const location = useLocation()
    // const navigate = useNavigate()

    // const socialLogin = (media) => {
    //     media()
    //         .then(result => {
    //             console.log(result.user);
    //             navigate(location?.state ? location.state : '/')
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })

    // }
    return (
            <div className="mt-5">
                <div className="flex items-center gap-6 justify-between">
                    <Link>
                        <h1
                            // onClick={() => socialLogin(googleLogin)}
                            className="text-2xl font-semibold text-white px-8 py-3 bg-[#015196] hover:bg-slate-800 rounded-lg hover:rounded-full flex items-center gap-3 "><FcGoogle className='text-2xl'></FcGoogle> Google</h1>
                    </Link>
                    <Link>
                        <h1
                            // onClick={() => socialLogin(googleLogin)}
                            className="text-2xl font-semibold text-white px-8 py-3 bg-[#015196] hover:bg-slate-800 rounded-lg hover:rounded-full flex items-center gap-3"><BsGithub className='text-2xl text-white'></BsGithub> Github</h1>
                    </Link>
                </div>
            </div>
    );
};

export default SocialLogin;