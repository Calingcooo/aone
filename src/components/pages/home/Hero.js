import React from 'react'
import { Link } from 'react-router-dom'
import heroBG from '../../../assets/images/building_facade.webp'

const Hero = () => {
  return (
    <div className='w-full relative pt-5 md:pt-0' id='home'>
        <div className='bottom-5 h-full w-1/2 ml-7 md:ml-20'>
            <Link to='/About'><button className='absolute bottom-14 md:bottom-40 text-xxs md:text-xl tracking-wide text-white font-black bg-yellow uppercase w-1/4 py-1 md:py-3 md:px-5 hover:opacity-75'>
              Learn More
            </button></Link>
        </div>
        <img src={heroBG} alt='HERO' className='bg-black mt-8'/>
    </div>

  )
}

export default Hero