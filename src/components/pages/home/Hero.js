import React from 'react'
import { Link } from 'react-router-dom'
import heroBG from '../../../assets/images/building_facade.jpg'
import makati from '../../../assets/images/makati.png'
import logo from '../../../assets/images/logo.png'

const Hero = () => {
  return (
    <div className='w-full relative' id='home'>
        <div className='absolute inset-0 bg-gray-900 bg-opacity-50'></div>
        <div className='absolute flex flex-col justify-evenly h-full ml-5 md:ml-10 p-5'>
            <div className='flex flex-row items-center'>
                <img src={makati} alt='IMAGE' className='h-10 w-10 md:h-16 md:w-16'/>
                <div>
                    <h1 className='text-white text-xxs md:text-sm'>MAKATI CITY SUBWAY INC. A WHOLLY-OWNED SUBSIDIARY OF </h1>
                    <h1 className='text-white text-xxs md:text-sm'>PHILIPPINE INFRADEV HOLDINGS INC.</h1>
                </div>
            </div>
            <img src={logo} alt='LOGO' className='h-20 w-1/2 md:h-40 md:w-11/12'/>
            <Link to='/About'><button className='text-xxs md:text-xl tracking-wide text-white font-black bg-yellow uppercase w-1/2 md:w-2/4 py-1 md:py-3 md:px-5 hover:opacity-75'>
              Learn More
            </button></Link>
        </div>
        <img src={heroBG} alt='HERO' className='bg-black'/>
    </div>

  )
}

export default Hero