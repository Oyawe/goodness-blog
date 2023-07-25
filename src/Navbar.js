import React from 'react';
import {Link} from 'react-router-dom' // for routing without sending requests to the server

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Goodness Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;