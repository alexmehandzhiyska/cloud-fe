import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-between w-screen text-2xl text-white bg-blue-600 px-20 py-3">
            <h1>Cloud</h1>

            <nav>
                <ul className="flex">
                    <li className="mx-5"><a href="https://facebook.com">Facebook</a></li>
                    <li className="mx-5"><a href="https://instagram.com">Instagram</a></li>
                </ul>               
            </nav>
        </footer>
    )
}

export default Footer;