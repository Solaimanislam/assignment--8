/* eslint-disable react/prop-types */
import { sortByKey } from "../utils";
import ReadCard from "./ReadCard";


const ReadBook = ({ books, sort }) => {
    const sortedData = sortByKey(books, sort);

    return (
        <div className="container lg:w-[830px] lg:mx-32 space-y-6 mt-8 ">
            {sortedData?.length > 0 ? (
                sortedData.map(book => <ReadCard book={book} key={book.bookId} />)
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};


export default ReadBook;