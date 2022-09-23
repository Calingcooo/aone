import React from 'react'

//Images
import SkyHigh from '../assets/images/AboutProject/skyhigh.png'
import Sublime from '../assets/images/AboutProject/sublimeopulence.png'
import FirstClass from '../assets/images/AboutProject/first-class.png'
import Transit from '../assets/images/AboutProject/transit-development.png'
import Map from '../assets/images/AboutProject/map.png'



const AboutSection = () => {
  return (
    <div className='antialiased'>
    <div className='h-28 bg-transparent'></div>

        {/* ABOUT THE PROJECT SECTION */}
        <div className='m-5'>
            <h1 className='text-center tracking-wide md:tracking-widest text-2xl md:text-5xl p-5 font-black uppercase'>about the project</h1>
            <p className='leading-relaxed text-left text-lg tracking-normal px-7 md:px-14'>
                Makati City Subway, a wholly-owned subsidiary of Philippine Infradev Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight (8) stations will be included in the 8-kilometer dual rail subway system.
                In addition with this, the company is developing a new estate that is not your typical township development in which the concept of Live-Work-Play is being offered to the market but rather we offer Connectivity, Community, Convenience, and Commerce. Aone Tower, which has a lot area of approximately 7,518 square meters, basically has almost everything to offer.
                Located on Amorsolo Street, which runs parallel to Ayala Avenue. AONE goes above and beyond the essentials to cater to the distinctive way of life led by each individual resident. A luxurious lobby, office floors, podium and parking, residential floors, and an extravagant amenity deck with a view of Makati and Manila Bay in 360 degrees. This customization requires careful planning in addition to creative thinking. However, it is no longer necessary to imagine one's perfect apartment in a premier city because one's home has already been delivered.
            </p>
        </div>
        {/* END OF THE PROJECT SECTION */}

        {/* FIRST SECTION */}
        <div className='grid grid-col-4 md:gap-6 flex justify-center border-2 mt-5'>
            <h1 className='col-span-4 text-center p-5 font-black'>Aside from that, AOne provides the following:</h1>

            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={SkyHigh} alt='Sky-High' className='rounded-lg shadow-lg hover:skew-y-3'/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                <h1 className='font-black text-2xl pb-5 tracking-normal md:px-14'>experience sky-high elevated living</h1>
                <p className='leading-relaxed text-left text-lg tracking-normal whitespace-normal px-7 md:px-14'>
                    Whatever mood or mode you are in—work, play, or relaxation, AONE’s size, excellent location, and tailored amenities help you make the most of it. 
                    Discerning sophisticates will feel right at home in AONE, the modern yet palatial feel of the myriad of designs present in one structure evokes an air of splendor few other luxury residences have achieved. 
                </p>
            </div>
        </div>
        {/* END OF FIRST SECTION */}
        
        {/* SECOND SECTION */}
        <div className='grid grid-col-4 gap-6 flex justify-center border-2 mt-5'>
        <h1 className='col-span-4 text-center p-5 font-black'></h1>
            <div className='col-span-4'>
                <img src={Sublime} alt='Sky-High'/>
            </div>

            <div className='col-span-4'>
                <h1>sublime opulence</h1>
                <p> 
                    Whatever mood or mode you are in—work, play, or relaxation, AONE’s size, excellent location, and tailored amenities help you make the most of it. 
                    Discerning sophisticates will feel right at home in AONE, the modern yet palatial feel of the myriad of designs present in one structure evokes an air of splendor few other luxury residences have achieved. 
                </p>
            </div>
        </div>
        {/* END OF SECOND SECTION */}

        {/* THIRD SECTION */}
        <div className='grid grid-col-4 gap-6 flex justify-center border-2 mt-5'>
        <h1 className='col-span-4 text-center p-5 font-black'></h1>
            <div className='col-span-4'>
                <img src={FirstClass} alt='Sky-High'/>
            </div>

            <div className='col-span-4'>
                <h1>first-class luxury made a reality</h1>
                <p> 
                    Customization is the foundation of splendor. From the architecture to the amenities, every aspect of the good life at AONE covers all the basics and then some, 
                    to accomodate each resident’s unique lifestyle. Extravagance and customization, imply meticulous planning and creativity. But the need to imagine one’s ideal, 
                    top-tier city home is no longer a necessary-that home has arrived.
                </p>
            </div>
        </div>
        {/* END OF THIRD SECTION */}

        {/* FOURTH SECTION */}
        <div className='grid grid-col-4 gap-6 flex justify-center border-2 mt-5'>
            <h1 className='col-span-4 text-center p-5 font-black'></h1>
            <div className='col-span-4'>
                <img src={Transit} alt='Sky-High'/>
            </div>

            <div className='col-span-4'>
                <h1>setting the stage for transit development</h1>
                <p> 
                    One of the pillars of socioeconomic growth and flow is basic mobility. Although cities are notorious for their traffic congestion, 
                    the solution is simple and obvious: public transportation. AONE believes that while residents should have a safe, secluded haven to call their own, the doorway to the city and all that it has to offer should always be open; thus, AONE will be connected to the Makati City Subway System.                   
                </p>
            </div>
        </div>
        {/* END OF FOURTH SECTION */}

        {/* FIFTH SECTION */}
        <div className='grid grid-col-4 gap-6 flex justify-center border-2 mt-5'>
            <h1 className='col-span-4 text-center p-5 font-black'>Location</h1>
            <div className='col-span-4'>
                <img src={Map} alt='Sky-High'/>
            </div>

            <div className='col-span-4'>
                <h1>Convenience in every corner</h1>
                <p> 
                    Without the proximity to work and living necessities, neither a business district nor an ideal home would advance far. 
                </p>
                <p>
                    Surrounded by banks, hospitals, and medical clinics, restaurants, 
                    parks, shopping center,  and lifestyle malls, the condominium is also
                    linked to the Makati City Subway System giving the Aone the ultimate 
                    word on residential address location for life and work balance.                
                </p>
                <p>
                    The project is situated 2.5 kilometers away from Makati City Hall and 1 kilometer away from Legaspi, which is home to
                    a number of well-known pocket parks.
                </p>
                <h1 className='col-span-4 text-center p-5 font-black'>
                    The Chinese embassy, which situated in Buendia Avenue, can be reached in 1 kilometer, 
                    while Ayala Triangle can be reached in 1.2 kiometers.
                </h1>

            </div>
        </div>
        {/* END OF FIFTH SECTION */}





    </div>

  )
}

export default AboutSection