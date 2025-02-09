import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Logo } from '../../Constant';
import { Link, useLocation } from 'react-router-dom';
import { context } from '../../context';

function Navbar() {
    const [scrolled, setScrolled] = useState(0);
    const { darkMode, setDarkMode } = useContext(context)
    const { pathname } = useLocation();
    const handleScroll = useCallback(() => {
        const position = window.scrollY;
        setScrolled(position);
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const toggleDarkMode = () => {

        setDarkMode(!darkMode);
    };

    return (
        <nav
            className={`navbar flex items-center justify-between fixed left-0 top-0 right-0 p-3 px-10 z-50 transition-all duration-300 dark:bg-black dark:text-white ${scrolled > 100 || pathname !== '/' ? 'bg-white text-black' : 'bg-transparent text-white'}  `}
        >
            <Link className="navbar-brand" href="#">
                <img src={Logo} alt="Logo" style={{ width: '100px' }} />
            </Link>
            <div className="container-fluid flex justify-end items-center space-x-4">
                <Link to="/" className="text-xl">Home</Link>
                <div
                    onClick={toggleDarkMode}
                    className="px-1 py-1 bg-gray-800 text-white rounded-full cursor-pointer"
                >
                    <span className={`transition-colors duration-300  dark:text-yellow  text-white`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            className="fill-current"
                        >
                            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                        </svg>
                    </span>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
