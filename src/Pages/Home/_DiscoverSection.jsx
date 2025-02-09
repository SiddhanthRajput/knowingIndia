import React from 'react'
import { TypeofPlace } from '../../Constant/Typeplace'

function DiscoverSection() {
    return (
        <div>
            <div className="cards-container px-6 mb-4 grid grid-cols-1 lg:grid-cols-3 gap-7 mobile:grid-cols-2">
                {
                    TypeofPlace.map((item) =>

                        <div key={item.id} className="card relative cursor-pointer  transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden rounded-lg">
                            <div className="card-image">
                                <img
                                    src={item.image}
                                    alt="Card image cap"
                                    className='w-full  object-cover mobile:h-[200px] h-[100px] '
                                    loading='lazy'
                                /> </div>
                            <div className="overlay absolute top-0 left-0 right-0 bottom-0  " style={{ background: 'rgba(0,0,0,0.5)' }}>
                                <div className='  text-white  font-semibold font-serif text-4xl flex items-center justify-center h-full'>
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default DiscoverSection