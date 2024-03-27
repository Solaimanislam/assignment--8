
import { IoLocationOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";

const FavCard = ({ book }) => {
    const { image, author, bookName, review, tags, publisher, category, rating, yearOfPublishing, totalPages } = book;
    return (
        <div className="card space-y-4 p-3 card-side bg-base-100 border-2">
            <figure><img className=" bg-slate-400 p-3 rounded-xl" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                
                <p className=" border-b-2 pb-3 font-medium"><span className=" text-lg font-bold">Review: </span>{review}</p>
                <p className=" border-b-2 pb-3 font-medium"><span className=" text-lg font-bold">By: </span>{author}</p>
                <div className=" flex items-center border-b-2 pb-3 ">
                    <p className=" flex items-center"><span className=" text-lg font-bold mr-4">Tags:
                    </span>
                        {
                            tags?.slice(0, 2).map((item) => (
                                <p key={item.bookId} className=" text-[#23BE0A] text-xl font-medium">#{item}</p>
                            ))
                        }
                    </p>
                    <div className=" flex items-center gap-3 font-medium">
                        <p><IoLocationOutline></IoLocationOutline></p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 font-medium">
                    <div className="flex items-center gap-3">
                        <p><MdPeopleAlt></MdPeopleAlt></p>
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p><MdOutlineContactPage></MdOutlineContactPage></p>
                        <p>Page: {totalPages} </p>
                    </div>
                </div>
                <div className=" flex items-center justify-between">
                    <button className="btn bg-[#328EFF26] rounded-full px-4">Category: {category}</button>
                    <button className="btn bg-[#FFAC3326] rounded-full px-6">Rating: {rating}</button>
                    <button className="btn bg-[#23BE0A] text-white rounded-full px-6">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FavCard;