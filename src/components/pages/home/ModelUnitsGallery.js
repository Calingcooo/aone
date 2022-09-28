import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


//Model Units Images
import units from '../../../data/ModelUnits'



function ModelUnitsGallery() {

    const sliderRef = useRef(null);
    console.log(sliderRef.current)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        };


  return (
    <div className='grid grid-cols-5 md:mt-40 p-5 relative overflow-hidden'>
        <div className='col-span-1'></div>
        <div className='col-span-4 text-right'>
            <h1 className='text-xs md:text-5xl font-black'>Our Model Units</h1>
            <p className='text-3xs md:text-2xl md:leading-normal mt-1 md:mt-5'>
                Whatever mood or mode you are in—work, play, 
                or relaxation, AONE’s size, excellent<br /> location, 
                and tailored amenities help you make the most of it.
                Discerning sophisticates <br />will feel right at home in AONE, 
                the modern yet palatial feel of the myriad of designs present in<br /> one 
                structure evokes an air of splendor few other luxury residences have
                achieved.
            </p>
        </div>
        
        <div className='col-span-5 relative mt-5 md:my-10'>
            <Slider ref={sliderRef} {...settings}>
                {units.map((img) => (
                    <div className='p-1 md:p-5' key={img.id}>                 
                        <img src={img.image} alt={img.image} className='h-24 md:h-52 w-3/4 md:w-full bg-contain rounded-xl drop-shadow-xl'/>
                    </div>
                ))}
            </Slider>
            <div className='col-span-5 flex justify-between items-center w-full absolute top-1/4 md:top-1/3'> 
                    <FontAwesomeIcon icon={faPlay} className='rotate-180 cursor-pointer h-10 md:h-16 hover:opacity-50' id='prev'
                        onClick={() => sliderRef.current.slickPrev()}/>
                    <FontAwesomeIcon icon={faPlay} className='cursor-pointer h-10 md:h-16 hover:opacity-50' id='next'
                        onClick={() => sliderRef.current.slickNext()}/>
            </div>
        </div>
        
        
    </div>        
  )
}

export default ModelUnitsGallery