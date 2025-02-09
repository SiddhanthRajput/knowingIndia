import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../Constant'

function Card({ img, name, Description, id }) {
    return (
        <div>  <div className="container flex flex-col gap-5 dark:bg-black  pb-3 ">
            <div className="image p-2  shadow-md rounded-sm h-[200px] overflow-hidden">
                <img src={img} alt="asam" width={'100%'} onError={(e) => (e.currentTarget.src = history)} />
            </div>
            <div className="content  font-serif">
                <h2 className=' text-2xl mb-5'>{name}</h2>
                <p className=' text-md '>{Description?.length > 50 ? `${Description?.slice(0, 100)} .....` : Description}</p>
                <Link to={`destination/${name}`}>
                    <button className=' bg-forest-green p-3 px-8 mt-3 rounded-md text-white'>Learn More</button>
                </Link>
            </div>
        </div></div>
    )
}

export default Card