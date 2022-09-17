import React from 'react';

// Components
import Ratings from './Ratings/Ratings';
function Testimonials() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-4xl text-gray-900">
          A Community of Happy Customers!
        </h2>
        <p className="mb-10 text-base max-w-xl mx-auto text-center text-gray-600">
          We have an entire community of happy customers and a <span className='text-xl text-amber-500'>5 star</span> rating on
          Yelp. But don't just take it from us!
        </p>

        <Ratings />

        <div className="flex flex-wrap -m-5">
          <div className="w-full md:w-1/3 p-5">
            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
              <div className="h-full px-7 py-8 bg-white rounded-lg">
                <p className="mb-8 text-lg text-gray-900">
                  &ldquo;Steve is awesome! He will get you the best deal
                  possible! He has 27 years experience in the buisness, and gave
                  my Mom the best deal on her mattres. Best place to buy in
                  Simi&rdquo;
                </p>
                <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                  Adrian Berumen
                </h3>
                <p className="text-sm text-gray-600">Happy Customer</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-5">
            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
              <div className="h-full px-7 py-8 bg-white rounded-lg">
                <p className="mb-8 text-lg text-gray-900">
                  &ldquo;Great deals from a locally owned and operated business,
                  Steve is personally on hand from selection to delivery. I
                  highly recommend them to anyone looking for a fair honest
                  deal.&rdquo;
                </p>
                <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                  Rick Smith
                </h3>
                <p className="text-sm text-gray-600">Happy Customer</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-5">
            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
              <div className="h-full px-7 py-8 bg-white rounded-lg">
                <p className="mb-8 text-lg text-gray-900">
                  &ldquo;I recently purchased a mattress from this
                  establishment. The owner was a great help to me and I felt
                  well informed. The price was reasonable and I will definitely
                  come back to 805 Mattress Pros for my next mattress
                  purchase.&rdquo;
                </p>
                <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">
                  Kathy Turner
                </h3>
                <p className="text-sm text-gray-600">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
