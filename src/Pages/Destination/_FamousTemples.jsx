import React from 'react'
import { bihar } from '../../Constant'

function FamousTemples() {
    return (
        <section>
            <h2 className=' px-9 text-center  underline text-2xl mobile:text-5xl mb-10 mt-10 font-bold text-forest-green dark:text-Mint-gray ' >
                ( Famous Temples in India )               </h2>

            <div className="container">
                <div className="grid2 grid grid-cols-1 gap-5 px-5 md:grid-cols-2">
                    <div className="item  bg-white p-4 rounded-lg shadow-lg max-h-[45vh] overflow-hidden">
                        <img src={bihar} className="w-full h-[30dvh] mobile:h-[40vh] object-cover rounded-xl" />
                    </div>
                    <div className="gridsection grid grid-cols-3 -300 gap-5">

                        <div className="item">
                            <img src={bihar} className="w-full h-[10dvh] mobile:h-[20vh] object-cover rounded-xl" />
                        </div>
                        <div className="item">
                            <img src={bihar} className="w-full h-[10dvh] mobile:h-[20vh] object-cover rounded-xl" />
                        </div>
                        <div className="item">
                            <img src={bihar} className="w-full h-[10dvh] mobile:h-[20vh] object-cover rounded-xl" />
                        </div>
                        <div className="item">
                            <img src={bihar} className="w-full h-[10dvh] mobile:h-[20vh] object-cover rounded-xl" />
                        </div>
                        <div className="item">
                            <img src={bihar} className="w-full h-[10dvh] mobile:h-[20vh] object-cover rounded-xl" />
                        </div>
                        <div className="item">
                            <img src={bihar} className="w-full h-[10dvh] mobile:h-[20vh] object-cover rounded-xl" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FamousTemples