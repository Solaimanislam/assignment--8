import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Books from "../Components/Books";
import Footer from "../Components/Footer";



const Home = () => {
    const books = useLoaderData();
    return (
        <div className="border-2">
            <Banner></Banner>
            <Books books={books}></Books>
            <Footer></Footer>
        </div>
    );
};

export default Home;