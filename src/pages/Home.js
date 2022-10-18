import React from 'react'
import { Helmet } from 'react-helmet'

//pages
import HomeSection from '../components/pages/home/HomeSection'

//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Home() {

  return (
    <>
    <Helmet>
    <meta
      name="description"
      content="Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system."
    />

    <link rel='canonical' href='https://aone.com.ph/' />

    <title>
      AOne
    </title>

    </Helmet>
    <div className='bg-beige'>
      <Navbar />
      <HomeSection />
      <Footer />
    </div>
    </>
  )
}

export default Home