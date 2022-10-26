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
      <link rel='canonical' href='https://aone.com.ph/' />
      <title>AOne</title>
      <meta name="title" content="AOne" />
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