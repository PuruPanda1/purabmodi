import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Importing from react-scroll
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import DayNightToggle from './Toggle/DayNightToggle';

function Navbar() {

    const [theme, setTheme] = useState('light');
    // const [activeNavElement, setActiveNavElement] = useState(0);

    // const handleNavItemClick = (n) => {
    //     setActiveNavElement(n);
    // };


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
                    <DayNightToggle toggled={theme} onClick={handleThemeSwitch} />
                </div>

                <div className="flex md:order-2 cursor-pointer">
    <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
        type="button"
        className="cursor-pointer text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
    >
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        <span className="hidden md:block">Get In Touch</span>
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
                                    offset={-100}
                                    spy={true}
                                    activeClass='text-blue-500 underline decoration-blue-500 decoration-2 transition-all duration-300'
                                    className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-1'>
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
