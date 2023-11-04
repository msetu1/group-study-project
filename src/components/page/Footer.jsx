import { AiOutlineFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
const Footer = () => {
    return (
        <div className="bg-black py-10">
            <footer className="footer p-10 text-white max-w-7xl mx-auto">
                <div className="">
                    <img className="w-[80px] ml-20 h-[80px] " src="https://i.ibb.co/BthKg2z/logo.jpg" alt="" />
                    <h1 className="text-4xl font-berkshire_font font-semibold text-[#ea580c] mb-3">rf-Study Group</h1>
                    <p>A virtual study group is a group of  students <br /> who come together online to study and  <br /> learn collaboratively. It  allows students to <br /> work together on academic projects, <br /> assignments,or test  preparation without   <br />  the need to be in the same physical location</p>
                    <p className="text-base font-semibold mt-5">----msetu5763@gmail.com-----</p>
                </div>
                <nav className="space-y-3">
                    <header className="font-bold text-2xl">Our Services</header>
                    <a className="link link-hover">IT Managment</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Product Design</a>
                </nav>
                <nav className="space-y-3">
                    <header className="font-bold text-2xl">Feature</header>
                    <a className="link link-hover">Assignment</a>
                    <a className="link link-hover">My Assignment</a>
                    <a className="link link-hover">Creat Assignment</a>
                    <a className="link link-hover">Submited Assignment</a>
                </nav>
                <nav className="space-y-3">
                    <header className="font-bold text-2xl">Feedback</header>
                    <a className="link link-hover">Good Courses</a>
                    <a className="link link-hover">Spacific Assignment</a>
                    <a className="link link-hover">online Group Study</a>
                </nav>
                <nav className="space-y-3">
                    <header className="font-bold text-2xl">Contact us</header>
                    <a className="link link-hover">Gopalpu,Tangail</a>
                    <a className="link link-hover">01955......</a>
                </nav>
            </footer>
            <div className="flex justify-center items-center gap-4 text-white">
                <a href="" className='text-3xl'><FcGoogle></FcGoogle></a>
                <a href="" className='text-3xl'><AiOutlineFacebook></AiOutlineFacebook></a>
                <a href="" className='text-3xl'><BsGithub></BsGithub></a>
                <a href="" className='text-3xl'><FiTwitter></FiTwitter></a>
            </div>
        </div>
    );
};

export default Footer;