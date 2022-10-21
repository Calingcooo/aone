import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";

//COMPONENTS
import MainLobbyGallery from './MainLobbyGallery'
import NthFloorGallery from './NthFloorGallery'
import RoofDeckGallery from './RoofDeckGallery'

//IMAGES
import units from '../../../data/ModelUnits'

//REACT SLICK SLIDER
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'



const HomeSection = () => {

const [ active, setActive ] = useState("MainGallery")


//MODEL UNITS FUNCTIONS
const sliderRef = useRef(null);

    const settings = {
        arrows: false,
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
    <>
    {/* HERO SECTION */}
    <div className='w-full relative pt-5 md:pt-0' id='home'>
        <div className='bottom-5 h-full w-1/2 ml-7 md:ml-20'>
            <Link to='/About-the-project'><button className='absolute bottom-14 md:bottom-40 text-xxs md:text-xl tracking-wide text-white font-black bg-yellow uppercase w-1/4 py-1 md:py-3 md:px-5 hover:opacity-75'>
              Learn More
            </button></Link>
        </div>
        <LazyLoadImage src='https://ik.imagekit.io/vah26qifw/building_facade__ovH_1y2I.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1666183301155' alt='HERO' className='bg-black mt-8'/>
    </div>

    {/* VIDEO SECTION */}
    <div className='grid grid-cols-6 gap-4 mt-10 md:mt-20 px-5' id='about'>
            <div className='col-span-3 flex justify-center items-center'>
                <h1 className='text-center sm:text-2xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black'>
                Experience sky-high elevated living that sets 
                the stage for a transit development
                </h1>
                
            </div>
            <div className='col-span-3'>
                <video src='https://ik.imagekit.io/vah26qifw/aoneVideoBG_2YQj8n5Sz.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1666184029142' autoPlay loop muted className='border rounded-xl drop-shadow-lg'/>
            </div>
        </div>

        {/* MODEL UNITS */}
        <div className='grid grid-cols-5 md:mt-40 p-5 relative overflow-hidden' id='model'>
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
        </div>

        <div className='col-span-5 w-full relative mt-5 md:my-10'>
            <Slider ref={sliderRef} {...settings}>
                {units.map((img) => (
                    <div className='p-1 md:p-5' key={img.id}>                 
                        <LazyLoadImage src={img.image} alt={img.name} className='h-24 md:h-52 2xl:h-[500px] w-3/4 md:w-full bg-contain rounded-xl drop-shadow-xl'/>
                    </div>
                ))}
            </Slider>
            <div className='col-span-5 flex justify-between items-center w-full absolute top-1/4 2xl:top-50 md:top-1/3'> 
                    <FontAwesomeIcon icon={faPlay} className='rotate-180 cursor-pointer h-10 lg:h-20 2xl:h-40 md:h-16 hover:opacity-50' id='prev'
                        onClick={() => sliderRef.current.slickPrev()}/>
                    <FontAwesomeIcon icon={faPlay} className='cursor-pointer h-10 md:h-16 lg:h-20 2xl:h-40 hover:opacity-50' id='next'
                        onClick={() => sliderRef.current.slickNext()}/>
            </div>
        </div>

        {/* IMAGE GALLERY */}
        <div className='overflow-hidden relative bg-fixed bg-cover bg-no-repeat w-full' id='gallery'
            style={{
                backgroundImage: `url('https://ik.imagekit.io/vah26qifw/facade2_YtehqypsS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1666183760876')`
            }}>      
                <div className='absolute inset-0 bg-gray-900 bg-opacity-75'></div>
                    
                    <div className='flex flex-col w-full relative justify-center items-center'>
                        <div>
                            <h1 className='text-yellow text-7xl text-center font-black w-full py-5'>Gallery</h1>
                        </div>
                        <div className='grid grid-cols-9 gap-3 w-full text-white p-5'>
                            <button className='col-span-3 px-5 py-2 md:ml-2 mt-3 bg-yellow rounded-lg hover:scale-105 ease-in-out duration-300'
                                onClick={() => setActive('MainGallery')}>TOWERS MAIN LOBBY</button>
                            <button className='col-span-3 px-5 py-2 md:ml-2 mt-3 bg-yellow rounded-lg hover:scale-105 ease-in-out duration-300'
                                onClick={() => setActive('NthFloorGallery')}>9TH FLOOR AMENITIES</button>
                            <button className='col-span-3 px-5 py-2 md:ml-2 mt-3 bg-yellow rounded-lg hover:scale-105 ease-in-out duration-300'
                                onClick={() => setActive('RoofDeckGallery')}>ROOF DECK AMENITIES</button>
                        </div>
                        { active === 'MainGallery' && <MainLobbyGallery /> }
                        { active === 'NthFloorGallery' && <NthFloorGallery /> }
                        { active === 'RoofDeckGallery' && <RoofDeckGallery /> }
                    </div>
                </div>

    </>
  )
}

export default HomeSection