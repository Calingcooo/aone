import React, { useState } from 'react'

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

    //Click Next Handler
    const handleNext = () => {
        count = ( count + 1 ) % Units.length
        setCurrentIndex(count)
    }

    //Click Prev Handler
    const handlePrev = () => {
        const imgLength = Units.length
        count = ( currentIndex + imgLength - 1 ) % imgLength
        setCurrentIndex(count) 
    }

  return (
    <div className='md:grid grid-cols-2 m-2 mt-5'>

        <div className='flex flex-col justify-center'>
            <h1 className='uppercase text-gray-800 text-2xl'>model units</h1>
            <p>Great stories begin at home, but what surrounds a home 
                allows the chapters to fully unfold. Imagine a place where 
                one could enjoy city life while knowing that a personal hearth, 
                awaits one at the end of the day<span className='text-slate-500'>—and then make it a reality. </span>
            </p>
        </div>
        <div className='w-full select-none relative'>
            <div className='aspect-w-16 aspect-h-16 md:w-full md:h-full'>
                <img src={Units[currentIndex]} alt='' />
            </div>
            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-4 flex justify-between items-center'>
                <button className='bg-white px-2 py-2' onClick={handlePrev}>prev</button>
                <button className='bg-white px-2 py-2' onClick={handleNext}>next</button>
            </div>
        </div>
        
            
    </div>
  )
}

export default ModelUnitsGallery