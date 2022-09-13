import React, { useEffect } from 'react';

// Stylesheets
import './Banner.css';
import 'aos/dist/aos.css';

// Third Party Imports
import Aos from 'aos';

// Icons
import { BsPhoneVibrate } from 'react-icons/bs';

// Images
import banner from '../../assets/images/banner.png';

function Banner() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="banner" data-aos="fade-down">
      <img src={banner} alt="banner" className="banner__image"></img>

      <h1 className="banner__title text-2xl sm:text-4xl lg:text-7xl">
        The Best Mattress Store in Simi Valley
      </h1>
      <div className="flex space-x-2 justify-center">
        <a
          href="tel:805-522-1344"
          type="button"
          className="banner__cta inline-block px-3 pb-2.5 pt-3 bg-red text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out content-center flex justify-center items-center text-center"
        >
          <BsPhoneVibrate className="mr-3" />
          <span className="banner__ctaText">Call Steve</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
