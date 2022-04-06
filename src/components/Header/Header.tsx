import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    return (
        <header className="flex justify-between w-screen text-2xl text-white bg-blue-600 px-20 py-3">
            <h1>Cloud</h1>

            <nav>
                {!user && 
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                }

                {user &&
                    <ul>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                }
               
            </nav>
        </header>

    )
}

export default Header;