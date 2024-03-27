import { useEffect, useState } from "react";
import { getBooksFav } from "../utils/favourite";
import FavCard from "./FavCard";



const FavList = () => {
    const [booksFav, setBooksFav] = useState([]);
    useEffect(() => {
        const wishedBooks = getBooksFav();
        setBooksFav(wishedBooks);
        // console.log(booksFav);
    }, [])
    return (
        <div className="container lg:w-[830px] lg:mx-32 space-y-6 mt-8 ">
            {
                booksFav?.map(book => <FavCard book={book} key={book.bookId} ></FavCard>)
            }
        </div>
    );
};

export default FavList;