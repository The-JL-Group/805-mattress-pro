import React, { useEffect } from 'react';

// Stylesheets
import 'aos/dist/aos.css';

// Third Party Imports
import Aos from 'aos';

// Images
import mattresses1 from '../../../assets/images/mattresses-1.jpg';
import mattresses2 from '../../../assets/images/mattresses-2.jpg';
import mattresses3 from '../../../assets/images/mattresses-3.png';
import mattresses4 from '../../../assets/images/mattresses-4.jpeg';
import mattresses5 from '../../../assets/images/mattresses-5.jpeg';

function TopInfo() {

  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div 
      class="bg-gray-50" 
      data-aos="fade-up">
      <div class="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">

        <section aria-labelledby="details-heading">
          <div class="flex flex-col items-center text-center">
            <h2 id="details-heading" class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Mattresses Can't Be Beat</h2>
            <p class="mt-3 max-w-3xl text-lg text-gray-600">Our walk-in and customer-friendly environment just aren't enough. Here's some of the most popular mattress sets we carry.</p>
          </div>

          <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div class="w-full aspect-w-3 aspect-h-2 h-60 rounded-lg overflow-hidden">
                <img src={mattresses3} alt="Drawstring top with elastic loop closure and textured interior padding." class="w-full h-full object-center object-cover"></img>
              </div>
              <p class="mt-8 text-base text-gray-500">At<span className='font-extrabold text-red'> 805 Mattress Pro</span>, we sell a variety of sets, including <span className='font-extrabold'>Twin</span>, <span className='font-extrabold'>Full</span>, <span className='font-extrabold'>King</span>, and our most popular <span className='font-extrabold'>Queen</span> sets; All <span className='font-extrabold text-red'>under $800</span>. Each set comes in three different types: <span className='font-extrabold'>8" Cool Gel</span>, <span className='font-extrabold'>9" Galaxy Plush</span>, and our <span className='font-extrabold'>Fuzion Pillowtop</span>. To top it all off, any purchase of these select mattress deals grant you a 10 year warranty.</p>
            </div>
            <div>
              <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden h-60">
                <img src={mattresses4}></img>
              </div>
              <p class="mt-8 text-base text-gray-500">During parts of the year, we also hold special limited time offers for individual customers - the lowest prices in town! So come in today, and choose <span className='font-extrabold text-red'>805 Mattress Pro</span> for your next mattress and the most down-to-earth service that no other mattress stores can offer.</p>
            </div>
          </div>
        </section>

      </div>
  </div>
  )
}

export default TopInfo;