import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col justify-between lg:gap-24 lg:flex-row-reverse">
                <img src="/banner.png" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div >
                    <h1 className="lg:text-5xl text-2xl font-semibold lg:font-bold mb-10 lg:space-y-10">Books to freshen <br className="" /> up your bookshelf</h1>
                    <Link to='/ListedBook'><button className="btn bg-[#23BE0A] text-white">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;