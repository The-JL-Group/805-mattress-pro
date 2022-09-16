import React from 'react'

function RestTopNav() {
  return (
    <div className="mx-auto py-3 px-3 sm:px-6 lg:px-8 bg-black">
        <div className="pr-16 sm:text-center sm:px-16">
        <p className="font-medium text-white">
            <span className="md:hidden">Interested in a mattress? Just call!</span>
            <span className="hidden md:inline">Give us a call for any information on the BEST mattresses in Simi!</span>
            <span className="block sm:ml-2 sm:inline-block">
            <a href="/contact" className="text-white font-bold underline hover:text-newRed">
                {' '}
                Contact us <span aria-hidden="true">&rarr;</span>
            </a>
            </span>
        </p>
        </div>  
    </div>
  )
}

export default RestTopNav