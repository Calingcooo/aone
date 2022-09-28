import React, { useState } from 'react'
import gallery from '../../../data/ImageGallery'
import bg from '../../../assets/images/facade2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {
    const [ sliderData, setSliderData ] = useState(gallery[0])

    const handleClick = (index) => {
        console.log(index)
        const slider = gallery[index]
        setSliderData(slider)
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
    <div className='overflow-hidden relative bg-fixed bg-cover bg-no-repeat w-full' id='gallery'
    style={{
        backgroundImage: `url(${bg})`
    }}>      <div className='absolute inset-0 bg-gray-900 bg-opacity-75'></div>
            
            <div className='flex flex-col w-full relative justify-center items-center'>
                <div>
                    <h1 className='text-yellow text-7xl text-center font-black w-full py-5'>Gallery</h1>
                </div>
                <div className='flex justify-center mb-5'>
                    <img src={sliderData.image} alt='Image Selected'  className='h-full w-4/5 shadow-drop-lg rounded-xl'/>
                </div>
                <div className='relative flex items-center'>
                    <FontAwesomeIcon icon={faPlay} className='rotate-180 cursor-pointer h-10 md:h-16 opacity-75 hover:opacity-100' id='arrow' 
                        onClick={slideLeft}/>
                    <div className='flex flex-row w-full h-full overflow-x-scroll scroll whitespace-no-wrap scroll-smooth scrollbar-hide' id='slider'>
                        {gallery.map((img, i) => (
                            <img src={img.image} key={img.id} alt={img.image} className='h-[100px] w-[300px] mb-5 cursor-pointer rounded-xl p-2 drop-shadow-xl hover:scale-105 ease-in-out duration-300'
                                onClick={() => handleClick(i)}/>
                        ))}
                </div>
                    <FontAwesomeIcon icon={faPlay} className='cursor-pointer h-10 md:h-16 opacity-75 hover:opacity-100' id='arrow' 
                        onClick={slideRight}/>
            </div>
        </div>
    </div>
  )
}

export default Gallery