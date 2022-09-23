import React from 'react'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'

//document title
import { TabTitle } from '../utils/GeneralFunctions'

function About() {
  TabTitle('About the project - AONE');
  
  return (
    <>
      <Navbar />
        <AboutSection />
      <Footer />
    </>
  )
}

export default About