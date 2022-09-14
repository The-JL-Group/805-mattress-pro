import React from 'react';

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-newRed text-white">
      <div className="">
        {/* Socials Container*/}
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>

          {/* Social Icons Container*/}
          <div className="flex justify-center">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/805MattressPros"
              target="_blank"
              rel="noreferrer"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>

            {/* Yelp */}
            <a
              href="https://www.yelp.com/biz/805-mattress-pros-simi-valley"
              target="_blank"
              rel="noreferrer"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="yelp"
                className="w-2.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"
                ></path>
              </svg>
            </a>

            {/* Google Review */}
            <a
              href="https://www.google.com/search?rlz=1C5CHFA_enUS999US999&sxsrf=ALiCzsa5nA8ZqS9-lN499GmKLRAfI5BfcQ:1662505286200&q=805+mattress+pros&spell=1&sa=X&ved=2ahUKEwiImpXoooH6AhUkmWoFHbyhBvgQBSgAegQIARA2&cshid=1662505289394074&biw=1920&bih=944&dpr=1#lrd=0x80e82e948da55b05:0xe2af8b59d1548153,1,,,"
              target="_blank"
              rel="noreferrer"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/805mattresspros/"
              target="_blank"
              rel="noreferrer"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@805mattresspros"
              target="_blank"
              rel="noreferrer"
              className="mr-6 text-white"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="tiktok"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mx-20 py-5 text-center md:text-center">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* Main Text */}
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex items-center justify-center">
                805 Mattress Pro
              </h6>

              {/* Home Icon */}
              <p className="flex items-center justify-center align-center mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                185 E Easy St, Simi Valley, CA 93065
              </p>

              {/* Email Icon */}

              <a
                href="mailto:1mattresspros@gmail.com"
                className="flex items-center justify-center align-center mb-4"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                1mattresspros@gmail.com
              </a>

              {/* Phone Icon */}
              <a
                href="tel:805-522-1344"
                className="flex items-center justify-center align-center mb-4"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                (805) 522-1344
              </a>
            </div>

            {/* Hours */}
            <div className="flex align-center justify-center flex-col sm:mx-20 md:mx-20 lg:mx-9">
              <h6 className="uppercase font-semibold mb-4">Hours</h6>

              <table>
                <tbody>
                  <tr>
                    <td className="">Monday</td>
                    <td>10AM-5PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>10AM-5PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>10AM-5PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>10AM-5PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>10AM-4PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>10AM-4PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>12PM-4PM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pages */}
            <div>
              <h6 className="uppercase font-semibold mb-2 flex justify-center md:mb-4">
                Pages
              </h6>
              <p className="mb-2 md:mb-4">
                <a href="/">Home</a>
              </p>
              <p className="mb-2 md:mb-4">
                <a href="/mattresses">Mattresses</a>
              </p>
              <p className="mb-2 md:mb-4">
                <a href="/meet-steve">Meet Steve</a>
              </p>
              <p>
                <a href="/contact">Contact</a>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-3 md:p-6 bg-newRed">
          <span>© 2022 Copyright: </span>
          <a
            className="text-white font-semibold"
            href="https://tailwind-elements.com/"
          >
            805 Mattress Pro
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
