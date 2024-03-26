
import { useLoaderData, useNavigation } from "react-router-dom";
import BookCard from "./BookCard";
import Loader from "./Loader";


const Books = ({books}) => {
    
    const navigation = useNavigation();
    if(navigation.state === 'loading') return <Loader></Loader>
    
    return (
        <section className="py-6 sm:py-12  dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl text-black font-bold">Books</h2>
                   
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        books?.map(book => <BookCard book={book} key={book.bookId} ></BookCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Books;