import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>


            <header>

            <Link to="/"><a href=" " className="logo"> MyBlog</a> </Link>
               

                <nav>

                    <Link to="/login" >Login</Link>
                    <Link to="/register" >Register</Link>

                </nav>

            </header>

        </div>
    );
};

export default Header;