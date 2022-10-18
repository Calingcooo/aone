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
    <meta
      name="description"
      content="Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system."
    />

    <link rel='canonical' href='https://aone.com.ph/' />

    <title>
      AOne - ABOUT THE PROJECT
    </title>
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