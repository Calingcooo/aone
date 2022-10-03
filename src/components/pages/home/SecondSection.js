import React from 'react'
import video from '../../../assets/videos/aoneVideoBG.mp4'

const SecondSection = () => {
  return (
    <div className='grid grid-cols-6 gap-4 mt-10 md:mt-20 px-5' id='about'>
        <div className='col-span-3 flex justify-center items-center'>
            <h1 className='text-center sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black'>
              Experience sky-high elevated living that sets 
              the stage for a transit development
            </h1>
            
        </div>
        <div className='col-span-3'>
            <video src={video} autoPlay loop muted className='border rounded-xl drop-shadow-lg'/>
        </div>
    </div>
  )
}

export default SecondSection