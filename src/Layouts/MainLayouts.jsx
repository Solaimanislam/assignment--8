import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* packet */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;