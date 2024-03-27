import toast from "react-hot-toast";
export const getBooksFav = () => {
    let booksFav = [];
    const storedBooks = localStorage.getItem('booksFav');
    if(storedBooks) {
        booksFav = JSON.parse(storedBooks);
    }
    return booksFav;
}
// save
export const saveBookFav = book => {
    let booksFav = getBooksFav()
    const isExist = booksFav.find(b => b.bookId === book.bookId)
    if( isExist){
        return toast.error('You have Already Added this Favourite book !');
    }
    booksFav.push(book);
    localStorage.setItem('booksFav', JSON.stringify(booksFav))
    toast.success('Books Added to Favourite List!')
}

