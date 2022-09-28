import React from 'react'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/pages/about/AboutSection'
import BackToTop from '../components/BackToTop'

//document title
import { TabTitle } from '../utils/GeneralFunctions'

function About() {
  TabTitle('AOne - About the Project');
  
  return (
    <div className='overflow-hidden relative'>
      <Navbar />
        <AboutSection />
        <BackToTop />
      <Footer />
    </div>
  )
}

export default About