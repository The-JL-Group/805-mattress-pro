import React from 'react';

import mattresses11 from '../../../assets/images/mattresses-11.jpg';
import mattresses12 from '../../../assets/images/mattresses-12.jpg';
import mattresses14 from '../../../assets/images/mattresses-14.jpg';
import mattresses15 from '../../../assets/images/mattresses-15.jpg';

function BottomInfo() {
  return (
    <section>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How To Pick Your Perfect Mattress
            </h2>
            <p className="mt-4 text-gray-500">
              Finding the your perfect mattress is hard. But, here at{' '}
              <span className="font-extrabold text-newRed">805 Mattress Pro</span>,
              we make that process so much{' '}
              <span className="font-extrabold">easier</span>. We have a variety
              of products that will give you the{' '}
              <span className="font-extrabold">best sleep ever</span>.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-newRed">Size</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Twin, Full, Queen, King
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-newRed">Material</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  8" Cool Gel, 9" Galaxy Plush, and our Fuzion Pillowtop
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-newRed">Brands</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  We only carry the best quality brands in mattresses, including
                  Primo International, Spinal Care Bedding, Leggett & Platt,
                  Chateau Collection, and much more
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-newRed">Price</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  With limited time offers, we have the lowest prices in town.
                  We proudly serve Ventura County: Simi Valley, Thousand Oaks,
                  Moorpark, and Carmarillo
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-newRed">Includes</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Choose from FREE local delivery or FREE heavy duty bed frame
                  or FREE cool gel pillow per purchase
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-newRed">Warranty</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  10 year warranty on all of our products
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={mattresses11}
              alt="Mattress 1"
              className="bg-gray-100 rounded-lg w-full h-72"
            />
            <img
              src={mattresses12}
              alt="Mattress 2"
              className="bg-gray-100 rounded-lg w-full h-72"
            />
            <img
              src={mattresses14}
              alt="Mattress 3"
              className="bg-gray-100 rounded-lg w-full h-72"
            />
            <img
              src={mattresses15}
              alt="Mattress 4"
              className="bg-gray-100 rounded-lg w-full h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomInfo;
