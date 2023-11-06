import './banner.css'
const Banner = () => {
    return (
        <div className='banner-img h-[600px] lg:h-[750px] mb-20'>
            <div className=' bg-black bg-opacity-50 h-full w-full'>
                
                <div className=' '>
                    <div className=" text-white text-center pt-24">
                        <h1 className='text-4xl lg:text-7xl mb-5 font-bold'>Meet and study with <br /> <span className='text-[#ea580c] font-berkshire_font '>students from all over</span> <br />  the world</h1>
                        <p className='text-white max-w-full lg:max-w-[50%] mx-auto px-5 lg:px-0'>A virtual study group is a group of students
                            who come together online to study and
                            learn collaboratively. It allows students to
                            work together on academic projects,
                            assignments,or test preparation without
                            the need to be in the same physical location</p>
                        <button className="text-2xl my-8 font-semibold text-white px-8 py-3 bg-[#015196] hover:bg-black rounded-lg hover:rounded-full ">Get Start...</button>

                        <div className='relative'>
                            <input className='py-4 px-8 text-black rounded-full lg:w-[700px]' type="search" placeholder='Search.......' id="" />
                            <div className='absolute'>
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;