import React from 'react'
//Assets
import videoBG from '../assets/videos/aoneVideoBG.mp4'

//Components
import Navbar from '../components/Navbar'
import ModelUnitsGallery from '../components/pages/home/ModelUnitsGallery'
import StudioOneGallery from '../components/pages/home/StudioOneGallery'
import Footer from '../components/Footer'



function Home() {

  return (
    <>
      <Navbar />
        <video src={videoBG} autoPlay loop muted className='w-full h-full object-cover'></video>
      <ModelUnitsGallery />
      <StudioOneGallery />
      <Footer />
    </>
  )
}

export default Home