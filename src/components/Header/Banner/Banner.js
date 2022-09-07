import React from 'react';

// Stylesheets
import './Banner.css';

// Third Party Imports
import { BsPhoneVibrate } from 'react-icons/bs';

// Images
import banner from '../../../assets/images/banner.png';

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="" className="banner__image"></img>

      <h1 className="banner__title text-2xl sm:text-5xl lg:text-7xl">
        The Best Mattress Store in Simi Valley
      </h1>
      <div class="flex space-x-2 justify-center">
        <button
          type="button"
          class="banner__cta inline-block px-3 py-2.5 bg-red text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
        >
          <BsPhoneVibrate className="mr-3" />
          Call Steve
        </button>
      </div>
    </div>
  );
}

export default Banner;
