import React, { useEffect } from 'react';

// Stylesheets
import 'aos/dist/aos.css';

// Third Party Imports
import Aos from 'aos';

// Components
import mattressDiscount from '../../assets/images/mattress-discount.png';
import mattressQuality from '../../assets/images/mattress-quality.png';
import mattressBest from '../../assets/images/mattress-best.png';

function OurMattress() {

  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="bg-white">
      <div className=" items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {/* Mattress Headers */}
        <div className="text-center mb-2 font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Discount Mattress to Fit Any Budget
          </h2>
          <p className="mb-4">
            805 Mattress Pros carries the highest quality mattresses for any
            budget. We offer the most competitive discount wholesale prices in
            the Ventura County area.
          </p>
        </div>

        {/* Mattress Cards */}
        <div>
          <div className="grid gap-5 place-content-center md:grid-cols-3">
            {/* Mattress Discount Card */}
            <div 
              className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
              >
              <img
                className="rounded-t-lg bg-drGry"
                src={mattressDiscount}
                alt="Mattress Discount"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Discount Mattress
                </h5>
                <p className="font-normal text-gray-700">
                  &#8594; Basic Mattress
                </p>
                <p className="font-normal text-gray-700">&#8594; Comfortable</p>
                <p className="mb-3 font-normal text-gray-700">
                  &#8594; Budget Friendly
                </p>
                <p className="mb-3 font-bold text-gray-700">$150-$999</p>
              </div>
            </div>

            {/* Mattress Quality Card */}
            <div 
              className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
            >
              <img
                className="rounded-t-lg bg-drGry"
                src={mattressQuality}
                alt="Mattress Quality"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Quality Mattress
                </h5>

                <p className=" font-normal text-gray-700">
                  &#8594; Cool Foam/Quality Coils
                </p>
                <p className="font-normal text-gray-700">
                  &#8594; Better Edge Support
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                  &#8594; Ideal For Guest Bedrooms
                </p>
                <p className="mb-3 font-bold text-gray-700">$700-$1999</p>
              </div>
            </div>

            {/* Mattress Best Card */}
            <div 
              className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
              >
              <img
                className="rounded-t-lg bg-drGry"
                src={mattressBest}
                alt="Mattress Best"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Best Mattress
                </h5>

                <p className=" font-normal text-gray-700 ">
                  &#8594; Highest Quality Mattress
                </p>
                <p className="font-normal text-gray-700 ">
                  &#8594; Best Edge Support
                </p>
                <p className="mb-3 font-normal text-gray-700 ">
                  &#8594; Ideal For Master Bedrooms
                </p>
                <p className="mb-3 font-bold text-gray-700 ">$900-$2749</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMattress;
