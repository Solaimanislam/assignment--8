/* eslint-disable react/prop-types */

import { sortByKey } from "../utils";
import WishCard from "./WishCard";

const Wishlist = ({ booksW, sort }) => {
    const sortedData = sortByKey(booksW, sort);

    return (
        <div className="container lg:w-[830px] lg:mx-32 space-y-6 mt-8 ">
            {
                sortedData?.map(book => <WishCard book={book} key={book.bookId} ></WishCard>)
            }
        </div>
    );
};

export default Wishlist;