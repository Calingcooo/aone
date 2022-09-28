import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (

    <footer className="grid grid-cols-4 bg-beige p-10" id='contact'>
            <div className='col-span-2'>
                <h1 className='text-black font-black text-xl md:text-5xl pb-5'>Contact Us</h1>
                <div className='flex flex-row items-center mb-3'>
                    <FontAwesomeIcon icon={faLocationDot} className='h-3 md:h-8 pr-2 md:pr-5' id='social'/>
                    <h3 className='text-3xs md:text-xl font-semibold'>38/F Rufino Pacific Tower, 6784 Ayala Ave.,<br /> Makati City, Philippines 1223</h3>
                </div>
                <div className='flex flex-row items-center mb-3'>
                    <FontAwesomeIcon icon={faPhone} className='h-3 md:h-8 pr-2 md:pr-5' id='social'/>
                    <h3 className='text-3xs md:text-xl font-semibold'>+63 2 8238-8459</h3>
                </div>
                <div className='flex flex-row items-center'>
                    <FontAwesomeIcon icon={faEnvelope} className='h-3 md:h-8 pr-2 md:pr-5' id='social'/>
                    <h3 className='text-3xs md:text-xl font-semibold'>sales@mcsi.com.ph</h3>
                </div>
            </div>
            <div className='col-span-2'>
                <h1 className='text-black font-black md:text-5xl mb-5'>Office Hours</h1>
                <h3 className='text-yellow text-xs md:text-2xl font-semibold'>Monday to Friday</h3>
                <h3 className='text-xs md:text-xl font-semibold'>8:30 am to 5:30 pm</h3>
                <div className='flex flex-row items-center mt-5'>
                    <h1 className='text-xs md:text-4xl font-black'>Follow us online</h1>
                    <div className='ml-5'>
                        <FontAwesomeIcon icon={faFacebook} className='h-3 md:h-8 pr-2 md:pr-5' id='social'/>
                        <FontAwesomeIcon icon={faTwitter} className='h-3 md:h-8 pr-2 md:pr-5' id='social'/>
                        <FontAwesomeIcon icon={faInstagram} className='h-3 md:h-8 pr-2 md:pr-5' id='social'/>
                    </div>
                </div>
            </div>
    </footer>


  )
}

export default Footer