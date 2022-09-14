import React from 'react';

// Icons
import { BsPhoneVibrate } from 'react-icons/bs';

function CTA() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto text-center py-10 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900">
          <span className="block">Got Any Questions?</span>
          <span className="block">Call Steve!</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-900">
        Want the best sleep in your life? Call or contact Steve today!
        </p>
        <a
          href="tel:805-522-1344"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-newRed hover:bg-black sm:w-auto"
        >
          <BsPhoneVibrate size={'4rem'}/>
        </a>
      </div>
    </div>
  )
}

export default CTA;