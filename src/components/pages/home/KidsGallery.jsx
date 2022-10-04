import React, { useState } from 'react'
import KidsPlayroom from '../../../data/KidsPlayroom'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function KidsGallery () {

    const [ kidSliderData, setKidSliderData ] = useState(KidsPlayroom[0])

    const handleClick = (index) => {
        console.log(index)
        const slider = KidsPlayroom[index]
        setKidSliderData(slider)
    }

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }


  return (
    <div className='col-span-5 relative mt-5 md:my-10'>
        <div className='flex justify-center mb-5'>
            <img src={kidSliderData.image} alt='Image Selected'  className='h-full w-4/5 shadow-drop-lg rounded-xl'/>
        </div>

        <div className='relative flex items-center w-full'>
            <FontAwesomeIcon icon={faPlay} className='rotate-180 cursor-pointer h-10 md:h-16 opacity-75 hover:opacity-100' id='arrow' 
                onClick={slideLeft}/>

            <div className='flex flex-row justify-center w-full h-full overflow-x-scroll scroll whitespace-no-wrap scroll-smooth scrollbar-hide' id='slider'>
                {KidsPlayroom.map((img, i) => (
                    <img src={img.image} key={img.id} alt={img.image} className='max-h-14 md:max-h-24 w-30 mb-5 cursor-pointer rounded-xl p-2 drop-shadow-xl hover:scale-105 ease-in-out duration-300'
                        onClick={() => handleClick(i)}/>
                        ))}
            </div>
                <FontAwesomeIcon icon={faPlay} className='cursor-pointer h-10 md:h-16 opacity-75 hover:opacity-100' id='arrow' 
                onClick={slideRight}/>
            </div>
    </div>
  )
}

export default KidsGallery