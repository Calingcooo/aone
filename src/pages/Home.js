import React from 'react'

//pages
import Hero from '../components/pages/home/Hero'

//Components
import Navbar from '../components/Navbar'
import ModelUnitsGallery from '../components/pages/home/ModelUnitsGallery'
import Gallery from '../components/pages/home/Gallery'
import Footer from '../components/Footer'
import SecondSection from '../components/pages/home/SecondSection'




function Home() {

  return (
    <div className='bg-beige'>
      <Navbar />
      <Hero />
      <SecondSection />
      <ModelUnitsGallery />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home