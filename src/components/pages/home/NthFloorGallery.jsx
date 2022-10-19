import React, { useState } from 'react'
import NthFloor from '../../../data/NthFloor'
import { LazyLoadImage } from "react-lazy-load-image-component";

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


function NthFloorGallery () {

    const [ floorSliderData, setfloorSliderData ] = useState(NthFloor[0])

    const handleClick = (index) => {
        const slider = NthFloor[index]
        setfloorSliderData(slider)
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
            <LazyLoadImage src={floorSliderData.image} alt='Image Selected'  className='h-full w-4/5 shadow-drop-lg rounded-xl'/>
        </div>

        <div className='relative flex items-center w-full'>
            <FontAwesomeIcon icon={faPlay} className='rotate-180 cursor-pointer h-10 md:h-16 opacity-75 hover:opacity-100' id='arrow' 
                onClick={slideLeft}/>

            <div className='flex flex-row justify-center w-full h-full overflow-x-scroll scroll whitespace-no-wrap scroll-smooth scrollbar-hide' id='slider'>
                {NthFloor.map((img, i) => (
                    <LazyLoadImage src={img.image} key={img.id} alt={img.image} className='max-h-14 md:max-h-24 w-30 mb-5 cursor-pointer rounded-xl p-2 drop-shadow-xl hover:scale-105 ease-in-out duration-300'
                        onClick={() => handleClick(i)}/>
                        ))}
            </div>
                <FontAwesomeIcon icon={faPlay} className='cursor-pointer h-10 md:h-16 opacity-75 hover:opacity-100' id='arrow' 
                onClick={slideRight}/>
            </div>
    </div>
  )
}

export default NthFloorGallery;