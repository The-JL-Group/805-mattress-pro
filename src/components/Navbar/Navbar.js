import React, { useState } from 'react';

// Stylesheets
import './Navbar.css';

// Icons
import { BsTelephone } from 'react-icons/bs';

// Images
import logo5 from '../../assets/logo/805MattressPro.png';

function Navbars() {
  // Navbar Toggle
  const [active, setActive] = useState('nav-list');
  // state is `toggleIcon`
  const [toggleIcon, setToggleIcon] = useState('nav-toggle');

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav-active')
      : setActive('nav-list');

    // Toggle Icon

    toggleIcon === 'nav-toggle'
      ? setToggleIcon('nav-toggle toggle')
      : setToggleIcon('nav-toggle');
  };

  return (
    // Navbar
    <nav className="bg-white fixed px-2 md:px-4 sm:px-0 xxs:px-0 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 ">
      <div className="bg-white sm:w-full flex flex-wrap justify-between items-center mx-auto z-20 py-2.5 px-2">
        {/* Navbar Logo */}
        <a href="/" className="flex items-center z-20">
          <img
            src={logo5}
            className="mr-3 h-10"
            alt="805 Mattress Pro logo"
          ></img>
        </a>

        {/* Navbar Inner Container */}
        <div className={`${toggleIcon} flex md:order-2 z-20 `}>
          {/* Navbar Phone # */}
          <a href="tel:805-522-1344" className="hover:text-red">
            <div className="navbar__phone xxs:hidden">
              <BsTelephone className="h-11" />
              <p className="text-2xl px-5 py-2.5 text-center mr-3 md:mr-0">
                805-522-1344
              </p>
            </div>
          </a>

          {/* Navbar Toggle */}
          <button
            onClick={navToggle}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${active} flex flex-col p-4 mt-4 bg-gray-50 rounded-b-md border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
        >
          <li>
            <a
              href="/"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-red md:hover:bg-transparent md:hover:text-red md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 xxs:hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/mattresses"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-red md:hover:bg-transparent md:hover:text-red md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 xxs:hover:text-white"
            >
              Mattresses
            </a>
          </li>
          <li>
            <a
              href="/meet-steve"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-red md:hover:bg-transparent md:hover:text-red md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 xxs:hover:text-white"
            >
              Meet Steve
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-red md:hover:bg-transparent md:hover:text-red md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 xxs:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbars;
