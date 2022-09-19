import React from 'react'

//components
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

//document title
import { TabTitle } from '../utils/GeneralFunctions'

function About() {
  TabTitle('About the project - AONE');
  
  return (
    <>
      <Navbar />
        
      <Footer />
    </>
  )
}

export default About