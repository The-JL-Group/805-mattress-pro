import React from 'react';
import { incentives } from './data';

function Incentives() {
  return (
    <div>
        <div class="bg-white">
            <div class="  ">
                <div class="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
                    <div class="max-w-xl mx-auto lg:max-w-none">
                        <div class="text-center">
                        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">We built our business on customer service</h2>
                        </div>
                        <div class="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
                            
                            {incentives.map((items, link) => (
                                <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
                                <div class="sm:flex-shrink-0">
                                    <div class="flow-root">

                                        {/* Incentive Icons */}
                                        <div class="w-16 h-16 mx-auto">
                                        {items.icon} 
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">

                                    {/* Incentive Titles */}
                                    <h3 class="text-sm font-medium text-gray-900">{items.title}</h3>

                                    {/* Incentive Text */}
                                    <p class="mt-2 text-sm text-gray-500">{items.text}</p>
                                </div>
                            </div>
                            ))}    
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Incentives;