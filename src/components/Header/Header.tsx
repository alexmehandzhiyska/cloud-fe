import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import logo from '../../assets/logo-white.png';

const Header = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    const navigate = useNavigate();
        
    const logout = () => {
        authService.logout(user.token)
            .then(() => navigate('/login'))
            .catch(err => console.log(err));
    }

    return (
        <header className="flex justify-between items-center min-w-screen text-2xl text-white bg-blue-600 px-16">
            <img src={logo} alt="Logo" className="w-24" />

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