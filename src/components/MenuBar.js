import React from "react";
import { Link } from 'react-router-dom';


const MenuBar = ()=>{
    return(
        <ul className="navbar-menu">
            {/* <li className="navbar-item"><a href="/">الرئيسية</a></li>
            <li className="navbar-item"><a href="/movies">افلام</a></li>
            <li className="navbar-item"><a href="/shows">مسلسلات</a></li> */}
            <li><Link className="navbar-item" to="/">الرئيسية</Link></li>
            <li><Link className="navbar-item" to="/movies">أفلام</Link></li>
            <li><Link className="navbar-item" to="/shows">مسلسلات</Link></li>
        </ul>
    )
}

export default MenuBar;