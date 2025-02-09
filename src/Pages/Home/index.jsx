import React from 'react'
import Hero from '../../Components/Hero'
import HeroCards from '../../Components/HeroCards'
import HomeCards from './_HomeCards'
import DiscoverSection from './_DiscoverSection'
import AttractionVist from './_AttractionVist'

function Home() {
    return (
        <div>
            <Hero />
            <div >
                <h2 className=' px-9 mt-7 text-3xl mobile:text-5xl  text-forest-green dark:text-Mint-gray  capitalize font-bold'>Top Dedtination for every bucket list</h2>
                <HomeCards />
            </div>
            <HeroCards />
            <div>
                <h2 className=' px-9  text-2xl mobile:text-5xl mb-10 mt-10 font-bold text-forest-green dark:text-Mint-gray ' >
                    Discover More
                </h2>

                <DiscoverSection />
            </div>
            <div>
                <h2 className=' px-9  text-2xl mobile:text-5xl mb-10 mt-10 font-bold text-forest-green dark:text-Mint-gray ' >
                    Attractions you Must Visit                </h2>

                <AttractionVist />

            </div>
            <div className="zigzag h-10 mb-10"></div>
        </div>
    )
}

export default Home