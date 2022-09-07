import React, { useEffect } from 'react';

// Stylesheets
import './Contact.css';
import 'aos/dist/aos.css';

// Third Party Imports
import Aos from 'aos';

// Components
import ContactForm from './ContactForm';

function Contact() {
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-left">
      <section className="text-gray-600 body-font relative">
        <div className="flex flex-col items-center text-center px-4 pt-24 sm:px-6 sm:pt-32">
          <h2
            id="details-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Contact 805 Mattress Pros
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-600">
            Need info on a particular brand of mattress? Looking for something
            specific for back pain or sleep issues? Just want to chat?
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 xxs:p-32 xs:p-40 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.827196177204!2d-118.79643238477901!3d34.278458480545055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82e948da55b05%3A0xe2af8b59d1548153!2s805%20Mattress%20Pros!5e0!3m2!1sen!2sus!4v1662479749963!5m2!1sen!2sus"
            ></iframe>

            {/* Contact Map Inner */}
            <div className="contact__mapInner bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">185 E Easy St, Simi Valley, CA 93065</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:1mattresspros@gmail.com"
                  className="text-indigo-500 leading-relaxed"
                >
                  1mattresspros@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">805-522-1344</p>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              How can we help?
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Let us know your name and email and we'll get back to you as soon
              as possible.
            </p>

            {/* Contact Form */}
            <ContactForm />

            <p className="text-xs text-gray-500 mt-3">
              Copyright &copy;805MattressPro{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
