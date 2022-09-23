import React, { useEffect } from 'react'
import '../index.css';

//Animation on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

//Images
import SkyHigh from '../assets/images/AboutProject/skyhigh.png'
import Sublime from '../assets/images/AboutProject/sublimeopulence.png'
import FirstClass from '../assets/images/AboutProject/first-class.png'
import Transit from '../assets/images/AboutProject/transit-development.png'
import Map from '../assets/images/AboutProject/map.png'
import HeroBG from '../assets/images/roofdeck.jpg'


const AboutSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

  return (
    <div  className='antialiased'> 
        <div className ='h-screen w-screen bg-no-repeat bg-cover bg-center bg-fixed drop-shadow-2xl' style={{
            backgroundImage: `url(${HeroBG})`
        }}>
        </div>

    <div className='px-5 drop-shadow-2xl'>
        {/* ABOUT THE PROJECT SECTION */}
        <div className='m-5'>
            <h1 className='text-center tracking-wide md:tracking-widest text-7xl md:text-5xl p-5  uppercase'>about the project</h1>
            <p className='leading-relaxed text-left text-lg tracking-normal px-7 py-8 md:px-14'>
                Makati City Subway, a wholly-owned subsidiary of Philippine Infradev Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight (8) stations will be included in the 8-kilometer dual rail subway system.
                In addition with this, the company is developing a new estate that is not your typical township development in which the concept of Live-Work-Play is being offered to the market but rather we offer Connectivity, Community, Convenience, and Commerce. Aone Tower, which has a lot area of approximately 7,518 square meters, basically has almost everything to offer.
                Located on Amorsolo Street, which runs parallel to Ayala Avenue. AONE goes above and beyond the essentials to cater to the distinctive way of life led by each individual resident. A luxurious lobby, office floors, podium and parking, residential floors, and an extravagant amenity deck with a view of Makati and Manila Bay in 360 degrees. This customization requires careful planning in addition to creative thinking. However, it is no longer necessary to imagine one's perfect apartment in a premier city because one's home has already been delivered.
            </p>
        </div>
        {/* END OF THE PROJECT SECTION */}

        <hr />

        {/* FIRST SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5'>
            <h1 className='col-span-4 text-2xl text-center p-5 font-black'>Aside from that, AOne provides the following:</h1>
            <div className='col-span-4 flex justify-center mt-20'>
                <h1 className='col-span-4 font-black text-2xl uppercase pb-5 tracking-normal px-7 md:px-14 md:hidden'>experience sky-high elevated living</h1>
            </div>
            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={SkyHigh} alt='Sky-High' className='order-2 rounded-lg drop-shadow-lg' data-aos="fade-right"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                <h1 className='font-black text-2xl pb-5 tracking-normal px-7 hidden md:px-14 md:block'>
                    experience sky-high elevated living
                </h1>
                <p className='leading-relaxed text-left text-lg tracking-normal whitespace-normal p-2'>
                    Whatever mood or mode you are in—work, play, or relaxation, AONE’s size, excellent location, and tailored amenities help you make the most of it. 
                    Discerning sophisticates will feel right at home in AONE, the modern yet palatial feel of the myriad of designs present in one structure evokes an air of splendor few other luxury residences have achieved. 
                </p>
            </div>
        </div>
        {/* END OF FIRST SECTION */}

        <hr />
        
        {/* SECOND SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center'>
            <div className='col-span-4 flex justify-center mt-5'>
                {/* HIDDEN ON DESKTOP VIEW */}
                <h1 className='col-span-4 font-black text-2xl uppercase tracking-normal px-7 md:px-14 md:hidden'>
                    sublime opulence
                </h1>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                {/* HIDDEN ON MOBILE VIEW */}
                <h1 className='font-black text-2xl pb-5 tracking-normal px-7 hidden md:px-14 md:block'>
                    sublime opulence 
                </h1>
                {/* HIDDEN ON MOBILE VIEW */}
                <p className='hidden md:block leading-relaxed text-left text-lg tracking-normal whitespace-normal p-5'>
                    While the exterior of the building sparkles in the sunlight and reflect particles of the busy nightlife of the surrounding area, the interior glows with internationalism.
                    AONE is where the best of all worlds meet, expertly combining Western postmodern silhouettes with classic Eastern elements. 
                    AONE’s design creates a continuum of visual and structural decadence, while also making nearly every point a suitable resting place for the human eye, landing lightly on its feet somewhere between art deco and 21st century minimalism.
                </p>
            </div>

            <div className='md:order-3 col-span-4 md:col-span-2 p-5'>
                <img src={Sublime} alt='Sublime Opulence' className='rounded-lg drop-shadow-lg' data-aos="fade-left"/>
            </div>
            {/* HIDDEN ON DESKTOP VIEW */}
            <p className='md:hidden leading-relaxed text-left text-lg tracking-normal whitespace-normal pb-5 p-5'>
                While the exterior of the building sparkles in the sunlight and reflect particles of the busy nightlife of the surrounding area, the interior glows with internationalism.
                AONE is where the best of all worlds meet, expertly combining Western postmodern silhouettes with classic Eastern elements. 
                AONE’s design creates a continuum of visual and structural decadence, while also making nearly every point a suitable resting place for the human eye, landing lightly on its feet somewhere between art deco and 21st century minimalism.
            </p>
        </div>
        {/* END OF SECOND SECTION */}

        <hr />

        {/* THIRD SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center'>
            <div className='col-span-4 flex justify-center mt-5'>
                <h1 className='col-span-4 text-center font-black text-2xl uppercase pb-5 tracking-normal px-7 md:px-14 md:hidden'>first-class luxury made a reality</h1>
            </div>

            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={FirstClass} alt='First Class' className='rounded-lg drop-shadow-lg' data-aos="fade-right"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                <h1 className='font-black text-2xl pb-5 tracking-normal px-7 hidden uppercase md:px-14 md:block'>
                    first-class luxury made a reality
                </h1>
                <p className='leading-relaxed text-left text-lg tracking-normal whitespace-normal'>
                    Customization is the foundation of splendor. From the architecture to the amenities, every aspect of the good life at AONE covers all the basics and then some, to accomodate each resident’s unique lifestyle. 
                    Extravagance and customization, imply meticulous planning and creativity. But the need to imagine one’s ideal, top-tier city home is no longer a necessary-that home has arrived.                 </p>
            </div>
        </div>
        {/* END OF THIRD SECTION */}

        <hr />

        {/* FOURTH SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5'>
            <div className='col-span-4 flex justify-center'>
                <h1 className='font-black text-center text-2xl uppercase md:pb-5 tracking-normal px-7 md:px-14 md:hidden'>setting the stage for transit development</h1>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                <h1 className='font-black text-2xl pb-5 tracking-normal px-7 hidden uppercase md:px-14 md:block'>
                    setting the stage for transit development 
                </h1>
                {/* HIDDEN ON MOBILE VIEW */}
                <p className='hidden md:block leading-relaxed text-left text-lg tracking-normal whitespace-normal px-7'>
                    One of the pillars of socioeconomic growth and flow is basic mobility. Although cities 
                    are notorious for their traffic congestion, the solution is simple and obvious: public transportation. 
                    AONE believes that while residents should have a safe, secluded haven to call their own, the doorway to the 
                    city and all that it has to offer should always be open; thus, AONE will be connected to the Makati City Subway 
                    System.
                </p>
            </div>

            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={Transit} alt='Transit' className='rounded-lg drop-shadow-xl' data-aos="fade-left"/>
            </div>

            {/* HIDDEN ON DESKTOP VIEW */}
            <p className='md:hidden leading-relaxed text-left text-lg tracking-normal whitespace-normal pb-5 px-7 md:px-14'>
                One of the pillars of socioeconomic growth and flow is basic mobility. Although cities 
                are notorious for their traffic congestion, the solution is simple and obvious: public transportation. 
                AONE believes that while residents should have a safe, secluded haven to call their own, the doorway to the 
                city and all that it has to offer should always be open; thus, AONE will be connected to the Makati City Subway 
                System.
            </p>

        </div>
        {/* END OF FOURTH SECTION */}

        <hr />

        {/* FIFTH SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5'>
            <div className='col-span-4 flex justify-center md:mt-9'>
                <h1 className='col-span-4 font-black text-2xl uppercase pb-5 tracking-normal px-7 md:px-14 md:hidden'>Location</h1>
            </div>
            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={Map} alt='Map' className='order-2 rounded-lg drop-shadow-lg' data-aos="fade-right"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                <h1 className='font-black text-2xl pb-5 tracking-normal px-7 hidden uppercase md:px-14 md:block'>
                    Location
                </h1>

                <p className='leading-relaxed text-left text-lg tracking-normal whitespace-normal'>
                    Without the proximity to work and living necessities, neither a 
                    business district nor an ideal home would advance far.
                </p>
                <br />
                <p className='leading-relaxed text-left text-lg tracking-normal whitespace-normal'>
                    Surrounded by banks, hospitals, and medical clinics, restaurants, parks, shopping center,  and lifestyle malls, 
                    the condominium is also linked to the Makati City Subway System giving the Aone the ultimate word on residential
                    address location for life and work balance.
                </p> 
                <br/>
                <p className='leading-relaxed text-left text-lg tracking-normal whitespace-normal'>
                    The project is situated 2.5 kilometers away from Makati City Hall and 1 kilometer away from Legaspi,
                    which is home to a number of well-known pocket parks. 
                </p>

            </div>
        </div>
        {/* END OF FIFTH SECTION */}

        <hr />
        <div className='flex justify-center p-10'>
            <h1 className='font-black text-center text-2xl pb-5 tracking-normal uppercase'>
                The Chinese embassy, which situated in Buendia Avenue, can be reached in 1 
                kilometer, while Ayala Triangle can be reached in 1.2 kiometers.
            </h1>
        </div>
        <hr />

    </div>
        


    </div>

  )
}

export default AboutSection