import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

const Header = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    const navigate = useNavigate();
        
    const logout = () => {
        authService.logout(user.token)
            .then(() => navigate('/login'))
            .catch(err => console.log(err));
    }

    return (
        <header className="flex justify-between w-screen text-2xl text-white bg-blue-600 px-20 py-3">
            <h1>Cloud</h1>

            <nav>
                {!user && 
                    <ul className="flex">
                        <li className="mx-5"><Link to="/login">Login</Link></li>
                        <li className="mx-5"><Link to="/register">Register</Link></li>
                    </ul>
                }

                {user &&
                    <ul className="flex">
                        <li className="mx-5" onClick={() => logout()}>Logout</li>
                    </ul>
                }
               
            </nav>
        </header>

    )
}

export default Header;