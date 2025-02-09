import React, { useEffect, useState } from 'react'
import { asam, bihar } from '../../Constant'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { indianStates } from '../../Constant/data';
import { indianTouristplace } from '../../Constant/IndianTouristPlace';
import Card from '../../common/Cards';
function HomeCards() {
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [slidesreview, setslidesreview] = useState(false);
    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 1200) {
                setSlidesPerView(4);


                setslidesreview(true)
            }
            if (window.innerWidth >= 1000) {
                setSlidesPerView(4);



            }



            else if (window.innerWidth >= 800) {

                setSlidesPerView(3);

            }
            else if (window.innerWidth >= 680) {
                setSlidesPerView(2);


            }

            else {

                setSlidesPerView(1);
                setslidesreview(false)

            }
        };

        // Initial setup
        updateSlidesPerView();

        // Update slidesPerView on window resize
        window.addEventListener('resize', updateSlidesPerView);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, []);


    return (
        <section className=' px-3 mt-5 p-9'>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={slidesreview}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >


                {
                    indianTouristplace.map((item, index) =>
                        <SwiperSlide key={item.id} className="box bg-white shadow-lg rounded-md  mb-5    p-3 ">
                            <Card img={item.img} name={item.States} Description={item.Description} />
                        </SwiperSlide>
                    )
                }


            </Swiper>
        </section>
    )
}

export default HomeCards