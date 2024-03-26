import toast from "react-hot-toast";
export const getBooksW = () => {
    let booksW = [];
    const storedBooks = localStorage.getItem('booksW');
    if(storedBooks) {
        booksW = JSON.parse(storedBooks);
    }
    return booksW;
}
// save
export const saveBookW = book => {
    let booksW = getBooksW()
    const isExist = booksW.find(b => b.bookId === book.bookId)
    if( isExist){
        return toast.error('You have Already Wished this book!');
    }
    booksW.push(book);
    localStorage.setItem('booksW', JSON.stringify(booksW))
    toast.success('Books Added to Wished List!')
}

