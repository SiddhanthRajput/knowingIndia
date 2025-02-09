import React, { useEffect, useRef } from 'react'
import { history, homeVideo } from '../../Constant'
import Typed from "typed.js";

function Hero() {
    const el = useRef(null);
    useEffect(() => {

        window.scrollTo({ top: 0, behavior: 'smooth' });

        const typed = new Typed(el.current, {
            strings: ["the best food in India", "the rich culture of India", "the diverse heritage of India"],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });


        // Destroying
        return () => {
            typed.destroy();
        };
    }
        , []);
    return (
        <div className="relative">
            <video poster={history} autoPlay muted loop className="w-full h-[100dvh] object-cover">
                <source src={homeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1 className="font-bold text-4xl text-white md:text-5xl lg:w-10/12 absolute  top-3/4 mobile:top-1/2 left-5 mobile:left-10">
                Find <span ref={el}></span>
            </h1>
        </div>
    )
}

export default Hero