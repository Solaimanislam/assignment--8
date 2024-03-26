import { useLoaderData, useParams } from "react-router-dom";
import useBook from "../Hooks/useBook";
import { useEffect, useState } from "react";


const Book = () => {
    const book = useLoaderData();


    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    // console.log(id);
    const { data, loading } = useBook();
    // console.log(data);
    // console.log(typeof id, singleData);

    useEffect(() => {
        const singleDataBook = data?.find((item) => item.bookId == id);
        // console.log(singleDataBook);
        setSingleData(singleDataBook)
    }, [data, id]);

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleData || {};

    return (

        <div className=" flex justify-evenly bg-base-100">
            <figure><img className=" lg:w-[576px] lg:h-[550px] bg-slate-300 rounded-lg p-2" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">{bookName}</h2>
                <p className=" border-b-2 pb-3"><span className=" text-lg font-bold">By: </span>{author}</p>
                <p className=" border-b-2 pb-3">{category}</p>
                <h4><span className=" text-lg font-bold">Review: </span>{review}</h4>
                <p className="border-b-2 pb-3 flex items-center"><span className=" text-lg font-bold mr-4">Tags:
                </span>
                    {
                        tags?.slice(0, 2).map((item) => (
                            <p key={item.bookId} className=" text-[#23BE0A] text-xl font-medium">#{item}</p>
                        ))
                    }
                </p>
                <p >Number of Pages: <span className="lg:ml-10 font-bold" >{totalPages}</span> </p>
                <p>Publisher: <span className="lg:ml-24 font-bold">{publisher}</span></p>
                <p>Year of Publishing: <span className="lg:ml-8 font-bold">{yearOfPublishing}</span></p>
                <p>Rating: <span className="lg:ml-28 font-bold">{rating}</span></p>

                <div className="card-actions">
                    <button className="btn px-6 py-4 border border-green-400 font-semibold">Read</button>
                    <button className="btn bg-[#50B1C9] text-white px-6 py-4 font-semibold">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Book;