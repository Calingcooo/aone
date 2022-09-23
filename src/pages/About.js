import React from 'react'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import BackToTop from '../components/BackToTop'

//document title
import { TabTitle } from '../utils/GeneralFunctions'

function About() {
  TabTitle('About the project - AONE');
  
  return (
    <div className='overflow-hidden'>
      <Navbar />
        <BackToTop />
        <AboutSection />
      <Footer />
    </div>
  )
}

export default About