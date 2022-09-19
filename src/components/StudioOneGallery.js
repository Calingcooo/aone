import React, { useState } from 'react'
//1 Bedroom Studio Images
import studioOne from '../data/Studio1BR'

function StudioOneGallery() {

    const [ sliderData, setSliderData ] = useState(studioOne[0])

    const handleClick = (index) => {
        console.log(index)
        const slider = studioOne[index]
        setSliderData(slider)
    }
  return (
    <div className='block m-5'>
        <img src={sliderData.image} className='h-full w-full'/>

        <div className='flex flex-row m-5 wi-full h-full'>
            {studioOne.map((img, i) => 
                <div className='border m-5' key={img.id} >
                <img src={img.image} alt={img.image} onClick={() => handleClick(i)} />
                </div>
            )}
        </div>
    </div>
       
    
  )
}

export default StudioOneGallery