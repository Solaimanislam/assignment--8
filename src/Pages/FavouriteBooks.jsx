import { Outlet } from "react-router-dom";


const FavouriteBooks = () => {

    return (
        <div>
            <div className=" flex container mx-auto justify-center items-center bg-slate-300 lg:py-10 rounded-xl">
                <h1 className=" lg:text-4xl lg:font-bold ">Favourite Book</h1>

            </div>
            <div className=" container mx-auto bg-sky-200 lg:p-10 rounded-xl mt-6">
                <p className=" text-xl font-semibold lg:p-10">Welcome to our favorite books section, where we share a curated selection of books that have captured our hearts and minds. Whether you're an avid reader searching for your next literary adventure or someone looking to explore new genres, you'll find something to love among our recommendations.</p>
                <p className="text-xl font-semibold">Below is a list of favorite books...[ You can see the favourite books when you click on Add To Favourite button ]</p>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default FavouriteBooks;