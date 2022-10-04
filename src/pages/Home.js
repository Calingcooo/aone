import React from 'react'

//pages
import HomeSection from '../components/pages/home/HomeSection'

//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'





function Home() {

  return (
    <div className='bg-beige'>
      <Navbar />
      <HomeSection />
      <Footer />
    </div>
  )
}

export default Home