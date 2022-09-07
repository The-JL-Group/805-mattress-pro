import React, { useEffect } from 'react';

// Stylesheets
import 'aos/dist/aos.css';

// Third Party Imports
import Aos from 'aos';

// Images
import meetSteve1 from '../../../assets/images/meet-steve-1.jpg';

// Stats
const stats = [
    { label: 'Founded', value: '1992' },
    { label: 'Rating', value: '5' },
];

function Message() {

  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div 
      className="relative bg-white py-16 sm:py-24"
      data-aos="fade-right"
      >
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={meetSteve1}
                alt=""
              />
              <div className="absolute inset-0 bg-stone-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-600 via-stone-600 opacity-40" />
              <div className="relative px-8">
                
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative">
                      "I love mattresses"
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-stone-50"><span className='font-extrabold text-red'>Steve Yanello</span>, Owner of <span className='font-extrabold text-red'>805 Mattress Pro</span></p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
            About 805 Mattress Pros
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
            <p className="text-lg">
                Dear Southern California Mattress Seekers,
              </p>
              <p className="text-base leading-7">
              This is where most local companies talk about their years in business and how they're the best at what they do (or whatever crazy claims they may have). To be quite honest, I'm just Steve, and I own a mattress store. I love what I do because I love this community. People come into my mattress store looking for comfort. Nothing too fancy, and obviously not too expensive. Isn't that why we all live in Ventura County in the first place?
              </p>
              <p className="text-base leading-7">
              For some simple peace, quite, and comfort. I'm not going to brag about my 20+ years of mattress sales experience. Just stop by, try out a few beds, lov'em, hate'em, and find the one that works for you and your family.
              </p>
              <p className="text-base leading-7">
              Simple as that. If that works for you, then stop by my shop, 805 Mattress Pros, in Simi Valley, CA and get yourself a pretty awesome mattress and an even better night's sleep.
              </p>
              <p className="text-base leading-7">
              Cheers,
              </p>
              <p className="text-base leading-7">
              Steve Yannello
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="/mattresses" className="text-base font-medium text-red">
                {' '}
                Learn more about our comfortable mattresses <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message