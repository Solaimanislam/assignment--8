import toast from "react-hot-toast";
export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books');
    if(storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books;
}
// save
export const saveBook = book => {
    let books = getBooks()
    const isExist = books.find(b => b.bookId === book.bookId)
    if( isExist){
        return toast.error('You have Already Read this book!');
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Books Added to Read!')
}

// Delete
export const deleteBook = id => {
    let books = getBooks();
    const remaining = books.filter(b => b.bookId !== id)
    localStorage.setItem('books', JSON.stringify(remaining))
    toast.success( 'Book Delete successfully!')
}