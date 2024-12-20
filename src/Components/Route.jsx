import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import Navber from "./Navber";


const Route = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Route;