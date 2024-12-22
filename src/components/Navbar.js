import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Importing from react-scroll
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();

    const [theme, setTheme] = useState('light');
    const [activeNavElement, setActiveNavElement] = useState(0);

    const handleNavItemClick = (n) => {
        setActiveNavElement(n);
    };


    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const navigation = [
        { id: 0, name: 'Home', to: "home" },
        { id: 1, name: 'About', to: "about" },
        { id: 2, name: 'Education', to: "education" },
        { id: 3, name: 'Experience', to: "experience" },
        { id: 4, name: 'Projects', to: "projects" },
        { id: 5, name: 'Skills', to: "skills" },
    ];

    const activeNavElementDesign = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
    const nonActiveNavElementDesign = "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    return (
        // <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 fixed">
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600 fixed">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="left flex justify-center cursor-pointer">
                    <Link
                        to="home"
                        smooth={true} // Enable smooth scroll
                        duration={500} // Scroll duration
                        offset={-70}
                        onClick={() => handleNavItemClick(0)}
                        className="flex items-center"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#36a6be] flex items-center justify-center mr-2">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Purab Modi
                        </span>
                    </Link>
                    <button id="theme-toggle" type="button" onClick={handleThemeSwitch} className="mx-3 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        {theme === 'light' ? <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> :
                            <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>}
                    </button>
                </div>

                <div className="flex md:order-2 cursor-pointer">
                    <Link
                        to="contact"
                        smooth={true} // Enable smooth scroll
                        duration={500} // Scroll duration
                        offset={-70}
                        onClick={() => handleNavItemClick(99)}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="md:mr-2" />
                        <span className="hidden md:inline">Get In Touch</span>
                    </Link>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
                        {navigation.map((item) => (
                            <li className='cursor-pointer' key={item.id}>
                                <Link
                                    to={item.to}
                                    smooth={true} // Enable smooth scroll
                                    duration={500} // Scroll duration
                                    offset={-70}
                                    onClick={() => handleNavItemClick(item.id)}
                                    className={activeNavElement === item.id ? activeNavElementDesign : nonActiveNavElementDesign}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
