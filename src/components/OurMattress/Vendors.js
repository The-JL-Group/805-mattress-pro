import React from 'react';
import vendor1 from '../../assets/images/vendor-1.png';
import vendor2 from '../../assets/images/vendor-2.png';
import vendor3 from '../../assets/images/vendor-3.png';
import vendor4 from '../../assets/images/vendor-4.png';
import vendor5 from '../../assets/images/vendor-5.png';

function Vendors() {
  return (
    <section>
      <div className="bg-gray-50 px-6 py-16 sm:p-16">
        <div className="max-w-xl mx-auto lg:max-w-none">
          <div className="max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-5">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="h-20 mx-auto"
                  src={vendor1}
                  alt="vendor 1"
                ></img>
              </div>
            </div>

            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="h-20 mx-auto"
                  src={vendor2}
                  alt="vendor 2"
                ></img>
              </div>
            </div>

            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="h-20 mx-auto"
                  src={vendor3}
                  alt="vendor 3"
                ></img>
              </div>
            </div>

            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="h-20 mx-auto"
                  src={vendor4}
                  alt="vendor 4"
                ></img>
              </div>
            </div>

            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="h-20 mx-auto"
                  src={vendor5}
                  alt="vendor 4"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vendors;
