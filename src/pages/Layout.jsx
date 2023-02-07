import React,{useEffect} from "react";
import {NavLink} from 'react-router-dom';
import Navbar from "../components/Navbar";

const Layout = ({children}) => {

    return(
        <React.Fragment>
             <Navbar/>
            <div className="card w-full bg-base-100 shadow-xl mt-3">
             <main>{children}</main>

</div>
            </React.Fragment>
    )
}

export default Layout