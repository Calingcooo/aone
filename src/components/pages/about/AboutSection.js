import React, { useEffect } from 'react'
import '../../../index.css';

//Animation on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

//Images
import SkyHigh from '../../../assets/images/AboutProject/skyhigh.png'
import Sublime from '../../../assets/images/AboutProject/sublimeopulence.png'
import FirstClass from '../../../assets/images/AboutProject/first-class.png'
import Transit from '../../../assets/images/AboutProject/transit-development.png'
import Map from '../../../assets/images/AboutProject/map.png'
import HeroBG from '../../../assets/images/roofdeck.jpg'


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
        <div className='m-5 md:mx-20'>
            <h1 className='text-center font-black text-cyan-900 tracking-wide md:tracking-widest p-5 uppercase text-4xl md:text-5xl'>about the project</h1>
            <p className='indent-8 leading-relaxed text-left text-sm tracking-normal py-5 md:text-lg md:px-5'>
                Makati City Subway, a wholly-owned subsidiary of Philippine Infradev Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight (8) stations will be included in the 8-kilometer dual rail subway system.
            </p>

            <p className='indent-8 leading-relaxed text-left text-sm tracking-normal pb-5 md:text-lg md:px-5'>
                In addition with this, the company is developing a new estate that is not your typical township development in which the concept of Live-Work-Play is being offered to the market but rather we offer Connectivity, Community, Convenience, and Commerce. Aone Tower, which has a lot area of approximately 7,518 square meters, basically has almost everything to offer.
            </p>

            <p className='indent-8 leading-relaxed text-left text-sm tracking-normal md:text-lg md:px-5'>
                Located on Amorsolo Street, which runs parallel to Ayala Avenue. AONE goes above and beyond the essentials to cater to the distinctive way of life led by each individual resident. A luxurious lobby, office floors, podium and parking, residential floors, and an extravagant amenity deck with a view of Makati and Manila Bay in 360 degrees. This customization requires careful planning in addition to creative thinking. However, it is no longer necessary to imagine one's perfect apartment in a premier city because one's home has already been delivered.
            </p>
        </div>
        {/* END OF THE PROJECT SECTION */}

        <hr />
            <h1 className='col-span-4 text-cyan-900 text-2xl text-center uppercase p-5 font-black'>Aside from that, AOne provides the following:</h1>
        <hr />

        {/* FIRST SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5'>

            <div className='col-span-4 flex justify-center mt-20'>
                <h1 className='col-span-4 text-center text-cyan-900 font-black text-3xl md:text-5xl uppercase pb-5 tracking-normal px-7 md:px-14'>experience sky-high elevated living</h1>
            </div>

            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={SkyHigh} alt='Sky-High' className='order-2 rounded-lg drop-shadow-lg' data-aos="fade-right"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm md:text-2xl indent-8 tracking-normal whitespace-normal p-2'>
                    Whatever mood or mode you are in—work, play, or relaxation, AONE’s size, excellent location, and tailored amenities help you make the most of it. 
                    Discerning sophisticates will feel right at home in AONE, the modern yet palatial feel of the myriad of designs present in one structure evokes an air of splendor few other luxury residences have achieved. 
                </p>
            </div>
        </div>
        {/* END OF FIRST SECTION */}

        <hr />
        
        {/* SECOND SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5'>

            <div className='col-span-4 flex justify-center mt-20'>
                <h1 className='col-span-4 text-center text-cyan-900 font-black text-3xl md:text-5xl uppercase pb-5 tracking-normal px-7 md:px-14'> sublime opulence</h1>
            </div>

            <div className='col-span-4 md:col-span-2 md:order-3 p-5'>
                <img src={Sublime} alt='Sky-High' className='order-2 rounded-lg drop-shadow-lg' data-aos="fade-left"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm md:text-2xl indent-8 tracking-normal whitespace-normal p-2'>
                    While the exterior of the building sparkles in the sunlight and reflect particles of the busy nightlife of the surrounding area, the interior glows with internationalism.
                    AONE is where the best of all worlds meet, expertly combining Western postmodern silhouettes with classic Eastern elements. 
                    AONE’s design creates a continuum of visual and structural decadence, while also making nearly every point a suitable resting place for the human eye, landing lightly on its feet somewhere between art deco and 21st century minimalism.
                </p>
            </div>
        </div>
        {/* END OF SECOND SECTION */}

        <hr />

        {/* THIRD SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5'>

            <div className='col-span-4 flex justify-center mt-20'>
                <h1 className='col-span-4 text-center text-cyan-900 font-black text-3xl md:text-5xl uppercase pb-5 tracking-normal px-7 md:px-14'>first-class luxury made a reality</h1>
            </div>

            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={FirstClass} alt='Sky-High' className='order-2 rounded-lg drop-shadow-lg' data-aos="fade-right"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm md:text-2xl indent-8 tracking-normal whitespace-normal p-2'>
                    Customization is the foundation of splendor. From the architecture to the amenities, every aspect of the good life at AONE covers all the basics and then some, to accomodate each resident’s unique lifestyle. 
                    Extravagance and customization, imply meticulous planning and creativity. But the need to imagine one’s ideal, top-tier city home is no longer a necessary-that home has arrived.
                </p>
            </div>
        </div>
        {/* END OF THIRD SECTION */}

        <hr />

        {/* FOURTH SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5'>

            <div className='col-span-4 flex justify-center mt-20'>
                <h1 className='col-span-4 text-center text-cyan-900 font-black text-3xl md:text-5xl uppercase pb-5 tracking-normal px-7 md:px-14'>setting the stage for transit development</h1>
            </div>

            <div className='col-span-4 md:col-span-2 md:order-3 p-5'>
                <img src={Transit} alt='Sky-High' className='order-2 rounded-lg drop-shadow-lg' data-aos="fade-left"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm md:text-2xl indent-8 tracking-normal whitespace-normal p-2'>
                    One of the pillars of socioeconomic growth and flow is basic mobility. Although cities 
                    are notorious for their traffic congestion, the solution is simple and obvious: public transportation. 
                    AONE believes that while residents should have a safe, secluded haven to call their own, the doorway to the 
                    city and all that it has to offer should always be open; thus, AONE will be connected to the Makati City Subway 
                    System.
                </p>
            </div>
        </div>
        {/* END OF FOURTH SECTION */}

        <hr />

        {/* FIFTH SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5'>

            <div className='col-span-4 flex justify-center mt-20'>
                <h1 className='col-span-4 text-center text-cyan-900 font-black text-3xl md:text-5xl uppercase pb-5 tracking-normal px-7 md:px-14'>Location</h1>
            </div>

            <div className='col-span-4 md:col-span-2'>
                <img src={Map} alt='Sky-High' className='order-2 rounded-lg drop-shadow-lg' data-aos="fade-right"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm md:text-xl indent-8 tracking-normal whitespace-normal p-2'>
                    Without the proximity to work and living necessities, neither a 
                    business district nor an ideal home would advance far.
                </p>

                <p className='leading-relaxed text-left text-sm md:text-xl indent-8 tracking-normal whitespace-normal p-2'>
                    Surrounded by banks, hospitals, and medical clinics, restaurants, parks, shopping center,  and lifestyle malls, 
                    the condominium is also linked to the Makati City Subway System giving the Aone the ultimate word on residential
                    address location for life and work balance.
                </p>

                <p className='leading-relaxed text-left text-sm md:text-xl indent-8 tracking-normal whitespace-normal p-2'>
                    The project is situated 2.5 kilometers away from Makati City Hall and 1 kilometer away from Legaspi,
                    which is home to a number of well-known pocket parks. 
                </p>
        

            </div>
        </div>
        {/* END OF FIFTH SECTION */}

        <hr className='mt-20'/>
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