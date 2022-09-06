import React from 'react';
import { Link } from 'react-router-dom';

// Images
import info3 from '../../assets/images/info-3.avif';

function Info() {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">So why is 805 Mattress Pros the best mattress store in Simi Valley?</h2>
            <p class="mb-4">Because we understand that everyone is different when it comes to their comfort. You can't make a sales pitch on someone's comfort. You're looking for a mattress that YOU think is comfortable. Your new mattress is something that you will be sleeping on every night for years to come and only YOU can decide which mattress fits the bill.</p>
            <p>Sure, we can help you with finding a durable mattress that will last you a long time. We can also help you find a quality mattress at a discount price. But at the end of the day, a good night's rest is what you're looking for and we won't get in the way of that like all those other mattress stores do.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"></img>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"></img>
        </div>
    </div>

    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-column-start lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Online vs. In-Store: What's the Best Place to Buy a New Mattress?</h2>
            <p class="mb-4">We may be a bit biased here, but nothing beats actually going to a local mattress store and trying out a new mattress. To be honest, we don't even know why online mattress shops exist. You wouldn't believe how many customers come into 805 Mattress Pros with the same story:</p>
            <p class="mb-4">"I bought a mattress online, but after a week I returned it because it wasn't right for me".</p>
            <p class="mb-2">Yup. We get it. Sure it's convenient to 1-click buy a mattress on Amazon or wherever you buy mattresses online, but we believe you should take your time and really figure out what feels right for you. You're going to be sleeping on this thing for years so we strongly suggest you take your mattress buying seriously!</p>
        </div>
        <div class=" gap-4 mt-4 w-full ">
            <img class="w-5/6 h-48 rounded-lg object-cover" src={info3} alt="office content 1"></img>  
        </div>
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mt-2">
            <p class="mb-4">To add another selling point, choosing your local Ventura County mattress store is actually cheaper than buying a new mattress online or from a large chain.</p>
            <p class="mb-4"><span className='font-bold'>Why?</span></p>
            <p class="mb-4">Because we deal with smaller brands where we develop a relationship with the supplier. We've been in the mattress bsuiness for years, but due to our small town values, we decided not to "sell out" and expand into a mattress chain with bogus deals on subpar mattresses. We hand select every brand of mattress we carry because of their reputation and quality.</p>
            <p class="mb-4">And that's the magic word right there.</p>
            <p class="mb-4"><span className='font-bold'>Reputation.</span></p>
            <p class="mb-4">Here at 805 Mattress Pros, our reputation is everything. We only carry the 
                <a href="/mattresses">
                    <span className='font-bold text-sky-500 hover:underline'> best mattresses </span>at the best prices because we care about keeping you happy.
                </a>
            </p>
            <p class="mb-4">Happy customers are the reason we're still in business and it's a fulfilling feeling knowing we play a role in helping our local community sleep well.</p>
        </div>
        <div class="mt-4 w-full flex items-center justify-center">
            <img class="w-2/3 h-48 rounded-lg object-cover" src={info3} alt="office content 1"></img>  
        </div>
    </div>
</section>
  )
}

export default Info