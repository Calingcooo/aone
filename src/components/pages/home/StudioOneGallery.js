import React, { useState } from 'react'

//1 Bedroom Studio Images
import studioOne from '../../../data/Studio1BR'

function StudioOneGallery() {

    const [ sliderData, setSliderData ] = useState(studioOne[0])

    const handleClick = (index) => {
        console.log(index)
        const slider = studioOne[index]
        setSliderData(slider)
    }
  return (
    <div className='block m-5 h-full'>

        <div className=''>
            <img src={sliderData.image} className='aspect-w-16 aspect-h-16 md:w-full md:h-[600px]' alt='IMAGE SLIDER'/>
        </div>

        <div className='flex flex-row justify-around items-center border'>
            {studioOne.map((img, i) => (
                <div key={img.id} className='h-full m-1 md:m-5 md:h-40'>
                    <img src={img.image} alt={img.image} className='h-14 w-full md:h-full' 
                       onClick={() => handleClick(i)} />
                </div>
            ))}
        </div>
                
    </div>
       
    
  )
}

export default StudioOneGallery