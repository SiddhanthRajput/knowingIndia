import React, { useEffect, useState } from 'react';
import { history, indian_food } from '../../Constant';
import { indianTouristplace } from '../../Constant/IndianTouristPlace';
import Card from '../../common/Cards';
import { indianFood } from '../../Constant/IndianFood';
import { useParams } from 'react-router-dom';
import FoodHeroSection from './_FoodHeroSection';
import FamousTemples from './_FamousTemples';

function Destination() {
    const { name } = useParams()
    const placename = indianTouristplace.find((item) => item.States == name)
    const food = indianFood.find((item) => item.States == name)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <section >

            <div className="conatiner pt-[15vh] pb-[5vh] ">
                <div className="heading mobile:px-16   text-center font-serif text-forest-green font-semibold mobile:text-5xl text-4xl   pb-8  drop-shadow-lg  ">
                    {placename?.TouristPlace} ( {placename?.States} )
                </div>
                <div className="image_conatiner flex justify-center ">

                    <div className="  mobile:p-6 p-3 mobile:w-[85vw] w-[90vw] mobile:h-[500px] h-[300px] overflow-hidden rounded-2xl shadow-lg bg-white  ">
                        <img src={placename?.img} alt="home page" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="desciption">
                <div className="desciption_heading mobile:text-xl px-10 text-justify text-lg font-serif">
                    {placename?.Description}
                </div>
            </div>
            <div>






            </div>

            <div className="foodHeroSection">
                <FoodHeroSection name={food?.Food} satet={food?.States} image={food?.img} description={food?.Description} />
            </div>
            <div className="tempalets">
                <FamousTemples></FamousTemples>
            </div>


        </section>
    );
}

export default Destination;
