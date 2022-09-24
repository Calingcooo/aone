import React, { useState, useEffect, useRef } from 'react'

//Model Units Images
import UnitOne from '../../../assets/images/ModelUnits/UnitOne.webp'
import UnitTwo from '../../../assets/images/ModelUnits/UnitTwo.webp'
import UnitThree from '../../../assets/images/ModelUnits/UnitThree.webp'
import UnitFour from '../../../assets/images/ModelUnits/UnitFour.webp'

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
    <div className='flex flex-col grid grid-cols-4 gap-5 m-2 mt-5 border-0.5'>

        <div className='col-span-4 flex justify-center md:my-10 md:mt:10 border p-2 drop-shadow-lg'>
            <h1 className='col-span-4 text-center text-cyan-900 font-black text-3xl md:text-5xl uppercase tracking-normal px-7 md:px-14'>model units</h1>
        </div>

        <div className='col-span-4 md:col-span-2 flex flex-col justify-center items-center md:mt-5'>
            <p className='leading-relaxed text-left text-sm md:text-xl indent-8 tracking-normal whitespace-normal p-2'>
                Great stories begin at home, but what surrounds a home allows the 
                chapters to fully unfold. Imagine a place where one could enjoy city 
                life while knowing that a personal hearth, awaits one at the end of the day
                <span className='text-slate-500'>—and then make it a reality. </span>
            </p>

            <p className='leading-relaxed text-left text-sm md:text-xl indent-8 tracking-normal whitespace-normal p-2'>
                The privileged few are frequently pressed for options, but at the crossroads
                of business and pleasure, growth and stillness, refinement and reimagining,
                there can only be AONE. 
            </p>
        </div>

        <div ref={slideRef} className='col-span-4 md:col-span-2 select-none'>
            <img src={Units[currentIndex]} alt='Images of Units' className='order-2 rounded-lg drop-shadow-lg'/>
        </div>

            {/*<div className='absolute w-full top-1/2 transform -translate-y-1/2 px-4 flex justify-between items-center'>
                    <button className='bg-white px-2 py-2' onClick={handlePrev}>prev</button>
                    <button className='bg-white px-2 py-2' onClick={handleNext}>next</button>
                </div>*/}

    </div>
        
            
  )
}

export default ModelUnitsGallery