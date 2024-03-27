
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' items-center mx-auto '>
            <h1 className=' text-4xl font-extrabold mb-6'>404 Page Not Found</h1>
            <Link to='/'><button className='btn bg-green-500 p-4 text-white'>Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;