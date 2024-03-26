

import { useEffect, useState } from "react";

import { getBooks } from "../utils";
import ReadCard from "./ReadCard";


const ReadBook = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setBooks(storedBooks);
    } ,[])
    


    return (
        <div className="container lg:w-[830px] lg:mx-32 space-y-6 mt-8 ">
            {
                books?.map(book => <ReadCard book={book} key={book.bookId} ></ReadCard>)
            }
        </div>
    );
};

export default ReadBook;