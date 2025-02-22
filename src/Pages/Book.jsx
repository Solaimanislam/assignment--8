import { useLoaderData, useParams } from "react-router-dom";
import useBook from "../Hooks/useBook";
import { useEffect, useState } from "react";
import { saveBook } from "../utils";
import { saveBookW } from "../utils/WishIndex";
import { saveBookFav } from "../utils/favourite";


const Book = () => {
    const book = useLoaderData() || [];
    // console.log(book);


    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    
    const { data } = useBook();
    

    useEffect(() => {
        const singleDataBook = book?.find((item) => item.bookId == id);
        // console.log(singleDataBook);
        setSingleData(singleDataBook)
    }, [data, id]);

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleData || {};

    const handleRead = singleData => {
        // console.log(singleData);
        saveBook(singleData);
    }
    const handleWish = singleData => {
        // console.log(singleData);
        saveBookW(singleData);
    }
    const handleFavourite = singleData => {
        // console.log(singleData);
        saveBookFav(singleData);
    }

    return (

        <div className=" lg:flex justify-evenly bg-base-100 mt-6">
            <figure><img className=" mx-auto lg:w-[576px] w-[300px] h-[350px] lg:h-[550px] bg-slate-300 rounded-lg p-2" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">{bookName}</h2>
                <p className=" border-b-2 pb-3"><span className=" text-lg font-bold">By: </span>{author}</p>
                <p className=" border-b-2 pb-3 text-xl font-bold">{category}</p>
                <h4><span className=" text-lg font-bold">Review: </span>{review}</h4>
                <p className="border-b-2 pb-3 flex items-center"><span className=" lg:text-lg font-bold lg:mr-4">Tags:
                </span>
                    {
                        tags?.slice(0, 2).map((item) => (
                            <p key={item.bookId} className=" text-[#23BE0A] lg:text-xl font-medium">#{item}</p>
                        ))
                    }
                </p>
                <p >Number of Pages: <span className="lg:ml-10 lg:font-bold" >{totalPages}</span> </p>
                <p>Publisher: <span className="lg:ml-24 lg:font-bold">{publisher}</span></p>
                <p>Year of Publishing: <span className="lg:ml-8 lg:font-bold">{yearOfPublishing}</span></p>
                <p>Rating: <span className="lg:ml-28 lg:font-bold">{rating}</span></p>

                <div className="card-actions">
                    <button onClick={() => handleRead(singleData)} className="btn px-6 py-4 border border-green-400 font-semibold">Read</button>
                    <button onClick={() => handleWish(singleData)} className="btn bg-[#50B1C9] text-white px-6 py-4 font-semibold">Wishlist</button>
                    <button onClick={() => handleFavourite(singleData)} className="btn bg-green-500 text-white px-6 py-4 font-semibold">Add to favourite</button>
                </div>
            </div>
        </div>
    );
};

export default Book;