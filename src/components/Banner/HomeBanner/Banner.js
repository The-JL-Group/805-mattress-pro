import React, { useEffect } from 'react';

// Stylesheets
import './Banner.css';
import 'aos/dist/aos.css';

// Imports
import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';

import Aos from 'aos';

import { BsPhoneVibrate } from 'react-icons/bs';
import { CgMenuRound } from 'react-icons/cg';
import { AiFillCloseCircle } from 'react-icons/ai';

// Components
import TopNav from './TopNav';

// Images
import banner from '../../../assets/images/header-1.jpeg';
import banner2 from '../../../assets/images/banner.png';
import banner3 from '../../../assets/images/banner2.jpeg';
import mattresses16 from '../../../assets/images/mattresses-16.jpg';
import call from '../../../assets/images/call.jpg';

// Logo
import logo2 from '../../../assets/logo/805MattressPro.png';

const navigation = {
  categories: [
    {
      featured: [
        {
          name: 'Home',
          href: '/',
          imageSrc: banner2,
          imageAlt: 'Home link',
        },
        {
          name: 'Mattresses',
          href: '/mattresses',
          imageSrc: mattresses16,
          imageAlt: 'Mattresses link',
        },
        {
          name: 'Meet Steve',
          href: '/meet-steve',
          imageSrc: banner,
          imageAlt: 'Meet Steve link',
        },
        {
          name: 'Contact',
          href: '/contact',
          imageSrc: call,
          imageAlt: 'Contact link',
        },
      ],
    },
  ],
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Mattresses', href: '/mattresses' },
    { name: 'Meet Steve', href: '/meet-steve' },
    { name: 'Contact', href: '/contact' },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Banner() {
  // Animations
  useEffect(() => {
    // 2 second animation completeness
    Aos.init({ duration: 2000 });
  }, []);

  // Nav Toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <AiFillCloseCircle
                    className="h-10 w-10"
                    aria-hidden="true"
                    color="black"
                  />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div>
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'text-black border-newRed'
                              : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        Have a look around!
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="px-4 py-6 space-y-12"
                    >
                      <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative">
                            <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block text-sm font-medium text-gray-900"
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                            <p
                              aria-hidden="true"
                              className="mt-1 text-sm text-newRed"
                            >
                              Check it out
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  {/* Copyright */}
                  &#169; Copyright{' '}
                  <span className="text-newRed">805 Mattress Pro</span>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <a
                  href="https://the-jl-group-portfolio.vercel.app/"
                  className="-m-2 p-2 block font-medium text-gray-900"
                >
                  Website built by the{' '}
                  <span className="text-newRed underline">&#169;JLGroup</span>
                </a>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src={banner3}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* TopNav */}
            <TopNav />

            {/* SecondNav */}
            <div className="backdrop-blur-md backdrop-filter bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="h-16 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex-1 lg:flex lg:items-center">
                      <a href="/">
                        <span className="sr-only">Workflow</span>
                        <img className="h-10 w-auto" src={logo2} alt="logo" />
                      </a>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Flyout menus */}
                      <Popover.Group className="px-4 bottom-0 inset-x-0">
                        <div className="h-full flex justify-center space-x-8">
                          {navigation.categories.map((category) => (
                            <Popover key={category.name} className="flex">
                              {({ open }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white">
                                      {category.name}
                                      <span
                                        className={classNames(
                                          open ? 'bg-white' : '',
                                          'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                      <div
                                        className="absolute inset-0 top-1/2 bg-white shadow"
                                        aria-hidden="true"
                                      />

                                      <div className="relative bg-white">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                          <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                            {category.featured.map((item) => (
                                              <div
                                                key={item.name}
                                                className="group relative"
                                              >
                                                <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-center object-cover"
                                                  />
                                                </div>
                                                <a
                                                  href={item.href}
                                                  className="mt-4 block font-medium text-gray-900"
                                                >
                                                  <span
                                                    className="absolute z-10 inset-0"
                                                    aria-hidden="true"
                                                  />
                                                  {item.name}
                                                </a>
                                                <p
                                                  aria-hidden="true"
                                                  className="mt-1"
                                                >
                                                  Shop now
                                                </p>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}

                          {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-md font-medium text-black hover:text-newRed"
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex-1 flex items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 p-2 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>

                        {/* MOBILE OPEN ICON */}
                        <CgMenuRound
                          className="h-12 w-8"
                          aria-hidden="true"
                          color="black"
                        />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="/" className="lg:hidden">
                      <span className="sr-only">Workflow</span>
                      <img src={logo2} alt="logo" className="h-9 w-auto" />
                    </a>

                    {/* Phone # */}
                    <div className="flex-1 flex items-center justify-end">
                      <a
                        href="tel:805-522-1344"
                        className="hidden text-sm font-medium text-black lg:block hover:text-newRed"
                      >
                        <div className="flex">
                          <BsPhoneVibrate size="1.5rem" className="h-11" />
                          <p className="text-lg px-5 py-2.5 text-center mr-3 md:mr-0">
                            805-522-1344
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div
          data-aos="fade-up"
          className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-56 lg:px-0"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            The Best Mattress Store in Simi Valley
          </h1>
          <p className="mt-4 text-xl text-white">
            805 Mattress Pro has 30 plus years of experience in the mattress
            industry! We are truly untouchable in our product & our service!
            Respect & kindness IS A MUST!
          </p>
          <a
            href="/"
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:text-white hover:bg-newRed"
          >
            View our Mattresses
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
