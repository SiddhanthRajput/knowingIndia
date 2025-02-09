import React from 'react'
import { bihar, Dwarka, history } from '../../Constant'

function HeroCards() {
    return (
        <div className=' grid grid-cols-1 mt-10 gap-3 mobile:grid-cols-2 px-6'>


            <div className="relative p-5 shadow-md">
                <video poster={history} autoPlay muted loop className="w-full h-[40dvh] mobile:h-[60vh] object-cover rounded-xl">
                    <source src={Dwarka} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
            <div className=' flex  flex-col  gap-10  px-2'>
                <h1 className=' font-serif  text-forest-green dark:text-Mint-gray  text-2xl '>Embark on a Spiritual Journey Through India’s Ancient Temples</h1>
                <p className=' font-serif text-lg text-justify'>
                    Looking for beautiful and creative sea templates? 🌅 This video showcases a collection of high-quality templates designed for travel, beach, and ocean-themed projects. Whether you're creating a website, social media post, or travel blog, these templates will add a professional and refreshing touch. 🌎✨
                </p>
                <button className=' bg-forest-green text-white  w-28 p-4 rounded-lg shadow-lg'>Click </button>
            </div>
        </div>
    )
}

export default HeroCards