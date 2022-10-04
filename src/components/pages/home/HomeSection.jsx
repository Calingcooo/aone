import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//COMPONENTS
import MainLobbyGallery from './MainLobbyGallery'
import KidsGallery from './KidsGallery'
import CoWorkingGallery from './CoWorkingGallery'

//VIDEO
import video from '../../../assets/videos/aoneVideoBG.mp4'

//IMAGES
import heroBG from '../../../assets/images/building_facade.webp'       
import bg from '../../../assets/images/facade2.webp'
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

    useEffect(() => {
      console.log(sliderRef.current)
    }, [])

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
            <Link to='/About'><button className='absolute bottom-14 md:bottom-40 text-xxs md:text-xl tracking-wide text-white font-black bg-yellow uppercase w-1/4 py-1 md:py-3 md:px-5 hover:opacity-75'>
              Learn More
            </button></Link>
        </div>
        <img src={heroBG} alt='HERO' className='bg-black mt-8'/>
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
                <video src={video} autoPlay loop muted className='border rounded-xl drop-shadow-lg'/>
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
                        <img src={img.image} alt={img.image} className='h-24 md:h-52 2xl:h-[500px] w-3/4 md:w-full bg-contain rounded-xl drop-shadow-xl'/>
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
                backgroundImage: `url(${bg})`
            }}>      
                <div className='absolute inset-0 bg-gray-900 bg-opacity-75'></div>
                    
                    <div className='flex flex-col w-full relative justify-center items-center'>
                        <div>
                            <h1 className='text-yellow text-7xl text-center font-black w-full py-5'>Gallery</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center md:flex-row text-white my-5'>
                            <button className='px-5 py-2 mt-3 bg-yellow rounded-lg hover:scale-105 ease-in-out duration-300'
                                onClick={() => setActive('MainGallery')}>Main Lobby, Fitness Zone and Spa</button>
                            <button className='px-5 py-2 ml-5 mt-3 bg-yellow rounded-lg hover:scale-105 ease-in-out duration-300'
                                onClick={() => setActive('CoWorkingGallery')}>CoWorking</button>
                            <button className='px-5 py-2 ml-5 mt-3 bg-yellow rounded-lg hover:scale-105 ease-in-out duration-300'
                                onClick={() => setActive('KidsGallery')}>KidsPlayroom</button>
                        </div>
                        { active === 'MainGallery' && <MainLobbyGallery /> }
                        { active === 'CoWorkingGallery' && <CoWorkingGallery /> }
                        { active === 'KidsGallery' && <KidsGallery /> }
                    </div>
                </div>

    </>
  )
}

export default HomeSection