import React from 'react';

// Stylesheets
import './Banner.css';

// Third Party Imports
import { BsPhoneVibrate } from 'react-icons/bs';

// Images
import banner from '../../assets/images/header-1.jpeg';

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner" className="banner__image"></img>
      <div className="absolute inset-0 bg-black/[.2] mix-blend-multiply"></div>

      <h1 className="banner__title text-2xl sm:text-5xl lg:text-7xl">
        The Best Mattress Store in Simi Valley
      </h1>
      <div className="flex space-x-2 justify-center">
        <a
          href="tel:805-522-1344"
          type="button"
          className="banner__cta inline-block px-3 py-2.5 bg-white text-newRed font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
        >
          <BsPhoneVibrate className="mr-3" />
          Call Steve
        </a>
      </div>
    </div>
  );
}

export default Banner;
