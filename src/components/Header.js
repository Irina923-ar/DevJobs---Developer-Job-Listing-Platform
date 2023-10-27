import React from "react";
import { Link } from 'react-router-dom';
import DarkMode from "./DarkMode";

const Header = () => {
    return (
        <div className="header">
            <Link to={`/`}>
                <img className="logo" src="assets/desktop/logo.svg" alt="logo" />
            </Link>
            <DarkMode></DarkMode>
        </div>
    );
};

export default Header;