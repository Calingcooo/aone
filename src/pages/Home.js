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
        <video src={videoBG} autoPlay loop muted className='w-full h-full object-cover'></video>
      <ModeUnitsGallery />
      <StudioOneGallery />
      <Footer />
    </>
  )
}

export default Home