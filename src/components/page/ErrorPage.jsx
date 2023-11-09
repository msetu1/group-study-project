import { Link } from 'react-router-dom';
import error from '../../../public/error.gif'
const ErrorPage = () => {
    return (
        <div className='relative'>
            <img className='w-full min-h-screen' src={error} alt="" />

            <div className='absolute top-1/2 right-1/2'>
                <Link to="/">
                    <button className='btn btn-primary'>Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;