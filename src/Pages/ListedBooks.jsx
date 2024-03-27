
import { Link, useNavigation } from "react-router-dom";
import Loader from "../Components/Loader";
import { IoIosArrowDown } from "react-icons/io";

import Wishlist from "../Components/Wishlist";
import { getBooksW } from "../utils/WishIndex";
import ReadBook from "../Components/ReadBook";
import { getBooks } from "../utils";
import { useState } from "react";


const ListedBooks = () => {
    let booksW = getBooksW()
    let books = getBooks()
    const [sort, setSort] = useState(null);
  
    const [tabIndex, setTabIndex] = useState(0);
    const navigation = useNavigation();
    if (navigation.state === 'loading') return <Loader></Loader>;

    return (
        <div className=" container mx-auto">
            <div className=" flex justify-center items-center bg-slate-300 my-4 py-4 lg:py-16 rounded-xl">
                <h1 className=" text-xl font-semibold lg:text-4xl lg:font-bold ">Books</h1>
            </div>
            <div className="flex justify-center items-center">
                <details className="dropdown ">
                    <summary className="m-1 mb-3 btn bg-[#23BE0A] text-white px-10">Sort By<IoIosArrowDown></IoIosArrowDown> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">

                        <li onClick={() => setSort('rating')}><a>Rating</a></li>
                        <li onClick={() => setSort('totalPages')}><a>Number of Pages</a></li>
                        <li onClick={() => setSort('yearOfPublishing')}><a>Published Year</a></li>
                    </ul>
                </details>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start lg:mx-32 flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link
                    to=''
                    onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link
                    to={`wishlistBooks`}
                    onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>

            </div>
            {tabIndex === 0 ? <ReadBook books={books} sort={sort} />
             : <Wishlist booksW={booksW} sort={sort} />}
        </div>

    );
};

export default ListedBooks;