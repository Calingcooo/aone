import React, { useEffect } from 'react'
import '../../../index.css';

//Animation on Scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

//Images
import Sublime from '../../../assets/images/AboutProject/sublimeopulence.webp'
import FirstClass from '../../../assets/images/AboutProject/first-class.webp'
import Transit from '../../../assets/images/AboutProject/transit-development.webp'
import Map from '../../../assets/images/AboutProject/map.webp'


const AboutSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

  return (
    <div  className='antialiased'> 
    <div className='grid-px-5 drop-shadow-2xl'>
        {/* ABOUT THE PROJECT SECTION */}
        <div className='flex items-center mt-10 md:p-20 grid grid-cols-4'>
            <div className='col-span-4 p-5 md:col-span-2'>
                <h1 className='text-center font-black text-cyan-900 tracking-wide md:tracking-widest p-5 uppercase text-4xl md:text-5xl'>about the project</h1>
                <p className='indent-8 leading-relaxed text-left text-sm tracking-normal py-5 md:text-lg md:px-5'>
                Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system.
                Complementing the subway system are transit-oriented developments (TOD’s) to support the operation. The first TOD is the AOne tower with almost 250,000 sq.m floor area offering residential, office, and commercial units with amenities offering connectivity, convenience, commerce, and community.
                Located on Amorsolo Street, which runs parallel to Ayala Avenue, AOne goes above and beyond the essentials to cater to the distinctive way of life led by each individual resident. A luxurious lobby, office floors, podium and parking, residential floors, and an extravagant amenity deck with a view of Makati City and Manila Bay in 360 degrees. This customization requires careful planning in addition to creative thinking. It is no longer necessary to imagine one's perfect apartment in a premier city because one's home has already been delivered.                </p>
            </div>

            <div className='col-span-4 p-5 md:col-span-2 h-full w-full flex justify-center items-center'>
                <img src='https://ik.imagekit.io/vah26qifw/facade_1LaYcmN97.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1666184232584' alt='FACADE' className='max-h-[700px] min-h-[700px] rounded-lg drop-shadow-xl' data-aos="fade-left" />
            </div>
        </div>
        {/* END OF THE PROJECT SECTION */}

        <hr />
            <h1 className='col-span-4 text-cyan-900 text-2xl text-center p-5 font-black'>Aside from that, AOne provides the following:</h1>
        <hr />

        {/* FIRST SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5'>

            <div className='col-span-4 flex justify-center md:mt-10'>
                <h1 className='col-span-4 text-cyan-900 text-2xl text-center uppercase p-5 font-black'>first-class luxury made a reality</h1>
            </div>

            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={FirstClass} alt='First-class luxury' className='h-full order-2 rounded-lg drop-shadow-lg' data-aos="fade-right"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm tracking-normal md:text-lg md:px-5'>
                    Customization is the foundation of splendor. From the architecture to the amenities, every aspect of the good life at AOne covers all the basics and then some, to accomodate each resident’s unique lifestyle. 
                    Extravagance and customization, imply meticulous planning and creativity. But the need to imagine one’s ideal, top-tier city home is no longer a necessary-that home has arrived.
                </p>
            </div>
        </div>
        {/* END OF FIRST SECTION */}

        <hr />
        
        {/* SECOND SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5'>

            <div className='col-span-4 flex justify-center md:mt-10'>
                <h1 className='col-span-4 text-cyan-900 text-2xl text-center uppercase p-5 font-black'> sublime opulence</h1>
            </div>

            <div className='col-span-4 md:col-span-2 md:order-3 p-5'>
                <img src={Sublime} alt='Sublime Opulence' className='order-2 md:h-5/6 rounded-lg drop-shadow-lg' data-aos="fade-left"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm md:text-lg tracking-normal whitespace-normal p-2'>
                    While the exterior of the building sparkles in the sunlight and reflect particles of the busy nightlife of the surrounding area, the interior glows with internationalism.
                    AOne is where the best of all worlds meet, expertly combining Western postmodern silhouettes with classic Eastern elements. 
                    AOne’s design creates a continuum of visual and structural decadence, while also making nearly every point a suitable resting place for the human eye, landing lightly on its feet somewhere between art deco and 21st century minimalism.
                </p>
            </div>
        </div>
        {/* END OF SECOND SECTION */}

        <hr />

        {/* THIRD SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5'>
            <div className='col-span-4 flex justify-center md:mt-10'>
                <h1 className='col-span-4 text-cyan-900 text-2xl text-center uppercase p-5 font-black'>setting the stage for transit development</h1>
            </div>

            <div className='col-span-4 md:col-span-2 p-5'>
                <img src={Transit} alt='Transit' className='rounded-lg drop-shadow-lg' data-aos="fade-right"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm md:text-lg tracking-normal whitespace-normal p-2'>
                    One of the pillars of socioeconomic growth and flow is basic mobility. Although cities 
                    are notorious for their traffic congestion, the solution is simple and obvious: public transportation. 
                    AOne believes that while residents should have a safe, secluded haven to call their own, the doorway to the 
                    city and all that it has to offer should always be open; thus, AOne will be connected to the Makati City Subway 
                    System.
                </p>
            </div>
        </div>
        {/* END OF THIRD SECTION */}

        <hr />

        {/* FOURTH SECTION */}
        <div className='grid grid-col-4 md:gap-3 flex justify-center mt-5 md:pb-5' id='location'>

            <div className='col-span-4 flex justify-center md:mt-10'>
                <h1 className='col-span-4 text-cyan-900 text-2xl text-center uppercase p-5 font-black'>Location</h1>
            </div>

            <div className='col-span-4 md:order-3 md:col-span-2'>
                <img src={Map} alt='Map' className='rounded-lg drop-shadow-lg p-5' data-aos="fade-left"/>
            </div>

            <div className='flex flex-col justify-center p-5 col-span-4 md:col-span-2'>
                
                <p className='leading-relaxed text-left text-sm md:text-lg tracking-normal whitespace-normal p-2'>
                    Without the proximity to work and living necessities, neither a 
                    business district nor an ideal home would advance far.
                </p>

                <p className='leading-relaxed text-left text-sm md:text-lg tracking-normal whitespace-normal p-2'>
                    Surrounded by banks, hospitals, and medical clinics, restaurants, parks, shopping center,  and lifestyle malls, 
                    the condominium is also linked to the Makati City Subway System giving the AOne the ultimate word on residential
                    address location for life and work balance.
                </p>

                <p className='leading-relaxed text-left text-sm md:text-lg tracking-normal whitespace-normal p-2'>
                    The project is situated 2.5 kilometers away from Makati City Hall and 1 kilometer away from Legaspi,
                    which is home to a number of well-known pocket parks. The Chinese embassy, which situated in Buendia Avenue, can be reached in 1 
                    kilometer, while Ayala Triangle can be reached in 1.2 kiometers.
                </p>
        

            </div>
        </div>
        {/* END OF FOURTH SECTION */}
        <hr />

    </div>
</div>

  )
}

export default AboutSection