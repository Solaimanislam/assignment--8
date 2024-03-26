import toast from "react-hot-toast";
export const getBooksW = () => {
    let booksW = []
    const storedBooks = localStorage.getItem('booksW');
    if(storedBooks) {
        booksW = JSON.parse(storedBooks)
    }
    return booksW;
}
// save
export const saveBookW = bookW => {
    let booksW = getBooksW()
    const isExist = booksW.find(b => b.bookId === bookW.bookId)
    if( isExist){
        return toast.error('You have Already Wished this book!');
    }
    booksW.push(bookW);
    localStorage.setItem('books', JSON.stringify(booksW))
    toast.success('Books Added to Wished List!')
}

