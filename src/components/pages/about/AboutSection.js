import React from 'react'

//Images
import SkyHigh from '.../assets/images/AboutProject/skyhigh.png'

const AboutSection = () => {
  return (
    <div className='uppercase'>
    <div className='h-28 bg-transparent'></div>

        <div className='border-2 uppercase'>
            <h1 className='text-center p-5 font-black'>about the page</h1>
            <p>Makati City Subway, a wholly-owned subsidiary of Philippine Infradev Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight (8) stations will be included in the 8-kilometer dual rail subway system.
                In addition with this, the company is developing a new estate that is not your typical township development in which the concept of Live-Work-Play is being offered to the market but rather we offer Connectivity, Community, Convenience, and Commerce. Aone Tower, which has a lot area of approximately 7,518 square meters, basically has almost everything to offer.
                Located on Amorsolo Street, which runs parallel to Ayala Avenue. AONE goes above and beyond the essentials to cater to the distinctive way of life led by each individual resident. A luxurious lobby, office floors, podium and parking, residential floors, and an extravagant amenity deck with a view of Makati and Manila Bay in 360 degrees. This customization requires careful planning in addition to creative thinking. However, it is no longer necessary to imagine one's perfect apartment in a premier city because one's home has already been delivered.
            </p>
        </div>

        <div className='grid grid-col-4 gap-6 flex justify-center border-2 mt-5'>
            <h1 className='col-span-4 text-center p-5 font-black'>Aside from that, AOne provides the following:</h1>
            <img src={SkyHigh} alt='Sky-High' className='col-span-2'/>
            <p className='col-span-2'>experience sky-high elevated living 
                Whatever mood or mode you are in—work, play, or relaxation, AONE’s size, excellent location, and tailored amenities help you make the most of it. 
                Discerning sophisticates will feel right at home in AONE, the modern yet palatial feel of the myriad of designs present in one structure evokes an air of splendor few other luxury residences have achieved. 
            </p>
        </div>
    </div>
  )
}

export default AboutSection