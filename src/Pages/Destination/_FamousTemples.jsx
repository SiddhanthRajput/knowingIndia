import React from "react";
import { famousIndianTemples } from "../../Constant/FamousTemplets";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";


function FamousTemples() {
    const { name } = useParams()
    const findTemple = famousIndianTemples.find((item) => item.state === name)
    const shuffledTemples = [...famousIndianTemples]
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);

    return (
        <section>
            <h2 className="px-9 text-center underline text-2xl mobile:text-5xl mb-10 mt-10 font-bold text-forest-green dark:text-Mint-gray">
                ( Famous Temples in India )
            </h2>

            <div className="container">
                <div className="grid2 grid grid-cols-1 gap-5 px-5 md:grid-cols-2">
                    <div className=" relative item bg-white p-4 rounded-lg shadow-lg max-h-[55vh] overflow-hidden">
                        <img
                            src={findTemple ? findTemple.Images : famousIndianTemples[0]?.Images} // First image from the array
                            className="w-full h-[30dvh] mobile:h-[50vh] object-cover rounded-xl"
                            alt="Famous Temple"
                        />
                        <div className=" absolute top-0 left-0 bottom-0 right-0  p-6 px-8  flex items-start flex-col  " style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                            <p className=" text-white   text-2xl font-serif pt-7">{findTemple ? findTemple.name : famousIndianTemples[0]?.name}</p>
                            <p className=" text-white  text-md font-serif flex gap-2 items-center"><FaLocationDot /> {findTemple ? findTemple.state : famousIndianTemples[0]?.state} ,{famousIndianTemples[0]?.location}</p>
                            <p className=" text-white   mobile:text-lg  text-sm font-serif pt-7">{(findTemple ? findTemple.Description : famousIndianTemples[0]?.Description)?.length > 150
                                ? (findTemple ? findTemple.Description : famousIndianTemples[0]?.Description)?.slice(0, 100) + '.....'
                                : (findTemple ? findTemple.Description : famousIndianTemples[0]?.Description)}
                            </p>
                        </div>
                    </div>

                    <div className="gridsection grid grid-cols-3 gap-5">
                        {shuffledTemples.map((temple, index) => (
                            <div key={index} className="item  relati">
                                <img
                                    src={temple.Images}
                                    className="w-full h-[10dvh] mobile:h-[20vh] object-cover rounded-xl"
                                    alt={temple.name}
                                />
                                <div className="    flex items-start flex-col  " >
                                    <p className=" text-black dark:text-white  text-sm font-serif ">{temple?.name}</p>
                                    <p className=" text-black dark:text-white  text-xs font-serif flex gap-2 items-center"><FaLocationDot /> {temple?.state} ,{famousIndianTemples[0]?.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FamousTemples;
