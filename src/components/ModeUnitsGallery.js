import React, { useState, useEffect, useRef } from 'react'

//Model Units Images
import UnitOne from '../assets/images/ModelUnits/UnitOne.webp'
import UnitTwo from '../assets/images/ModelUnits/UnitTwo.webp'
import UnitThree from '../assets/images/ModelUnits/UnitThree.webp'
import UnitFour from '../assets/images/ModelUnits/UnitFour.webp'

//Model Unit Images
const Units = [
    UnitOne,
    UnitTwo,
    UnitThree,
    UnitFour,
];

//Variable for click handlers
let count = 0;

function ModelUnitsGallery() {

    const [ currentIndex, setCurrentIndex ] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim')
    }

    //Slider Animation and Autoplay
    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)
        startSlider()
    }, []);

    //Click Next Handler
    const handleNext = () => {
        count = ( count + 1 ) % Units.length
        setCurrentIndex(count)
        slideRef.current.classList.add('fade-anim')
    }

    //Click Prev Handler
    const handlePrev = () => {
        const imgLength = Units.length
        count = ( currentIndex + imgLength - 1 ) % imgLength
        setCurrentIndex(count) 
        slideRef.current.classList.add('fade-anim')
    }

    const startSlider = () => {
        setInterval(() => {
            handleNext();
        }, 3000);
    }

  return (
    <div className='md:grid grid-cols-4 m-2 mt-5 border-0.5'>

        <div className='col-span-4' id='modelUnits'>
            <h1>MODEL UNITS</h1>
        </div>

        <div className='flex flex-col justify-center col-span-2'>
            <h1 className=' text-gray-800 text-2xl uppercase'>model units</h1>
            <p>Great stories begin at home, but what surrounds a home 
                allows the chapters to fully unfold. Imagine a place where 
                one could enjoy city life while knowing that a personal hearth, 
                awaits one at the end of the day<span className='text-slate-500'>—and then make it a reality. </span>
            </p>
        </div>
        <div ref={slideRef} className='w-full col-span-2 select-none relative'>
            <div className='aspect-w-16 aspect-h-16 md:w-full md:h-full'>
                <img src={Units[currentIndex]} alt='' />
            </div>
            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-4 flex justify-between items-center'>
                {/*<button className='bg-white px-2 py-2' onClick={handlePrev}>prev</button>
                <button className='bg-white px-2 py-2' onClick={handleNext}>next</button>*/}
            </div>
        </div>
        
            
    </div>
  )
}

export default ModelUnitsGallery