
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to='/' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 lg:text-lg rounded-lg ' : 'font-semibold' }><a>Home</a></NavLink>
                    <NavLink to='/ListedBook' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 lg:text-lg rounded-lg ' : 'font-semibold' }><a>Listed Books</a></NavLink>
                    <NavLink to='/pageToRead' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 lg:text-lg rounded-lg ' : 'font-semibold' }><a>Pages to Read</a></NavLink>
                    <NavLink to='/favouriteBooks' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 lg:text-lg rounded-lg ' : 'font-semibold' }><a>Fopular Books</a></NavLink>
                    <NavLink to='/aboutUs' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 lg:text-lg rounded-lg ' : 'font-semibold' }><a>About Us</a></NavLink>
                    </ul>
                </div>
                <Link to='/'><a className="btn btn-ghost lg:text-3xl text-xl lg:font-bold">Book Vibe</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center gap-5">
                    <NavLink to='/' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 font-semibold text-lg p-2 rounded-lg ' : 'font-semibold' }><a>Home</a></NavLink>
                    <NavLink to='/ListedBook' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 font-semibold text-lg p-2 rounded-lg ' : 'font-semibold' }><a>Listed Books</a></NavLink>
                    <NavLink to='/pageToRead' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 font-semibold text-lg p-2 rounded-lg ' : 'font-semibold' }><a>Pages to Read</a></NavLink>
                    <NavLink to='/favouriteBooks' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 font-semibold text-lg p-2 rounded-lg ' : 'font-semibold' }><a>Favourite Books</a></NavLink>
                    <NavLink to='/aboutUs' className={({isActive}) => isActive ? 'text-green-500 border border-green-400 font-semibold text-lg p-2 rounded-lg ' : 'font-semibold' }><a>About Us</a></NavLink>
                    
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn lg:ml-4 bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;