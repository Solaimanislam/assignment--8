import { useEffect, useState } from "react";


import { getBooksW } from "../utils/WishIndex";
import WishCard from "./WishCard";

const Wishlist = () => {
    const [booksW, setBooksW] = useState([]);
    useEffect(() => {
        const wishedBooks = getBooksW();
        setBooksW(wishedBooks);
    }, [])

    return (
        <div className="container lg:w-[830px] lg:mx-32 space-y-6 mt-8 ">
            {
                booksW?.map(book => <WishCard book={book} key={book.bookId} ></WishCard>)
            }
        </div>
    );
};

export default Wishlist;