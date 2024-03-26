import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";


const BookCard = ({book}) => {
    const {bookId, image, author, bookName, tags, category, rating} = book;

    return (
        <Link to={`/book/${bookId}`} className="flex flex-col p-3 rounded-lg border-2 transition hover:scale-105 hover:border-green-400 border-opacity-30">
            <a className=" text-center mx-auto bg-gray-400 rounded-lg" rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover p-2 lg:w-[230px] lg:h-[300px] " src={image} />
            </a>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className=" flex justify-around  text-xl font-medium tracking-wider  hover:underline text-[#23BE0A]">
                {
                    tags?.slice(0, 2).map((item) => (
                        <p key={item.bookId}>{item}</p>
                    ))
                }
                </a>
                <h3 className="flex-1 py-2 text-2xl text-black font-bold leading-snug">{bookName}</h3>
                <p className=" text-black text-base font-medium text-[#131313CC]">By: {author} </p>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-base font-medium text-[#131313CC]">
                    <span>{category}</span>
                    <span className=" flex gap-4 items-center">{rating} <FaRegStar></FaRegStar></span>
                </div>
            </div>
        </Link>
        
    );
};

export default BookCard;