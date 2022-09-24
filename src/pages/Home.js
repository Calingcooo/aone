import React from 'react'
//Assets
import videoBG from '../assets/videos/aoneVideoBG.mp4'

//Components
import Navbar from '../components/Navbar'
import ModelUnitsGallery from '../components/pages/home/ModelUnitsGallery'
import StudioOneGallery from '../components/pages/home/StudioOneGallery'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import StudioTwoGallery from '../components/pages/home/StudioTwoGallery'
import StudioThreeGallery from '../components/pages/home/StudioThreeGallery'



function Home() {

  return (
    <>
      <Navbar />
        <video src={videoBG} autoPlay loop muted className='w-full h-full object-cover drop-shadow-lg'></video>
      <ModelUnitsGallery />
      <hr className='my-10'/>
      <StudioOneGallery />
      <hr className='my-10'/>
      <StudioTwoGallery />
      <hr className='my-10'/>
      <StudioThreeGallery />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Home