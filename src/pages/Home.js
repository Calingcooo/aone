import React from 'react'
//Assets
import videoBG from '../assets/videos/aoneVideoBG.mp4'

//Components
import Navbar from '../components/Navbar'
import ModeUnitsGallery from '../components/ModeUnitsGallery'
import StudioOneGallery from '../components/StudioOneGallery'
import Footer from '../components/Footer'



function Home() {

  return (
    <>
      <Navbar />
        <div className='mx-2 my-2 drop-shadow-lg'>      
          <video src={videoBG} autoPlay loop muted className='w-full h-full object-cover rounded-lg'></video>
        </div>
        <div>
          <ModeUnitsGallery />
        </div>
        <div>
          <StudioOneGallery />
        </div>
      <Footer />
    </>
  )
}

export default Home