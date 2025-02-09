import React from 'react'
import { history } from '../../Constant'

function FoodHeroSection({ name, satet, image, description }) {
    return (
        <div className=' grid grid-cols-1 mt-10 gap-3 mobile:grid-cols-2 px-6'>


            <div className="relative p-5 shadow-md bg-white rounded-xl">
                <img src={image} className="w-full h-[40dvh] mobile:h-[40vh] object-cover rounded-xl" />

            </div>
            <div className=' flex  flex-col  gap-5 mt-10  px-2'>
                <h1 className=' font-serif  text-forest-green dark:text-Mint-gray   break-words text-2xl '>  Famous  Food of {satet} is    <span className=' mt-3 text-orange-800'>(   {name}  )</span> </h1>
                <p className=' font-serif text-lg text-justify'>
                    {description}  </p>
                <button className=' bg-forest-green text-white  w-28 p-4 rounded-lg shadow-lg'>Click </button>
            </div>
        </div>
    )
}

export default FoodHeroSection