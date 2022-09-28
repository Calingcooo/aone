import React from 'react'
import video from '../../../assets/videos/aoneVideoBG.mp4'

const SecondSection = () => {
  return (
    <div className='grid grid-cols-6 gap-4 mt-10 md:mt-20 px-5' id='about'>
        <div className='col-span-3'>
            <h1 className='text-xs md:text-5xl font-black'>Experience sky-high elevated living that sets the stage for a transit development</h1>
            <p className='text-3xs md:text-2xl md:leading-normal mt-1 md:mt-5'>
                Whatever mood or mode you are in—work, play, or relaxation, 
                AONE’s size, excellent location, and tailored amenities help 
                you make the most of it. Discerning sophisticates will feel right at home
                in AONE, the modern yet palatial feel of the myriad of designs present in 
                one structure evokes an air of splendor few other luxury residences 
                have achieved.
            </p>
        </div>
        <div className='col-span-3'>
            <video src={video} autoPlay loop muted className='border rounded-xl drop-shadow-lg'/>
        </div>
    </div>
  )
}

export default SecondSection