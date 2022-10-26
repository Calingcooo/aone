import React from 'react'
import { Helmet } from 'react-helmet'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutSection from '../components/pages/about/AboutSection'
import BackToTop from '../components/BackToTop'


function About() {
  
  return (
    <>
    <Helmet>
    <link rel='canonical' href='https://aone.com.ph/About-The-Project' />

    <title>AOne - ABOUT THE PROJECT</title>
      <meta name="title" content="AOne - ABOUT THE PROJECT" />
    </Helmet>
      <div className='overflow-hidden bg-beige'>
        <Navbar />
          <AboutSection />
          <BackToTop />
        <Footer />
      </div>
    </>
  )
}

export default About