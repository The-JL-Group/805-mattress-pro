import React, { useEffect } from 'react';

// Stylesheets
import 'aos/dist/aos.css';

// Imports
import Aos from 'aos';

// Components
import { incentives } from './data';

function Incentives() {

   // Animations
   useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div>
          <div className="bg-newBlue px-6 py-16 sm:p-16">
            <div className="max-w-xl mx-auto lg:max-w-none">
              <div className="text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                  We Built Our Business on Customer Service
                </h2>
              </div>
              <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
                {incentives.map((items, link) => (
                  <div className="text-center sm:flex sm:text-left lg:block lg:text-center" data-aos="fade-right">
                    <div className="sm:flex-shrink-0">
                      <div className="flow-root">
                        {/* Incentive Icons */}
                        <div className="w-16 h-16 mx-auto">{items.icon}</div>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                      {/* Incentive Titles */}
                      <h3 className="text-md font-medium text-white">
                        {items.title}
                      </h3>

                      {/* Incentive Text */}
                      <p className="mt-2 text-sm text-slate-200">{items.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incentives;
