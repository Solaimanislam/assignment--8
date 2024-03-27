import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import Book from "../Pages/Book";
import PageToRead from "../Pages/PageToRead";
import ReadBook from "../Components/ReadBook";
import Wishlist from "../Components/Wishlist";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayouts></MainLayouts>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/ListedBook',
          element: <ListedBooks></ListedBooks>,
          children: [
            {
                index: true,
                element: <ReadBook></ReadBook>
            },
            {
                path: 'wishlistBooks',
                element: <Wishlist></Wishlist>
            },
          ]
        },
        {
          path: '/book/:id',
          element: <Book></Book>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/pageToRead',
          element: <PageToRead></PageToRead>
        }
      ],
    },
   
  
  ])