import React, { Component } from 'react'
import '../../../index.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


//gallery images
import bg from '../../../assets/images/facade2.jpg'
import gallery from '../../../data/ImageGallery'



export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }

render() {
  return (

    <div className='overflow-hidden relative bg-fixed bg-cover bg-no-repeat h-full w-full' id='gallery'
    style={{
        backgroundImage: `url(${bg})`
    }}>
        <h1 className='text-yellow text-7xl text-center font-black absolute w-full z-20'>Gallery</h1>
        
        <div className='absolute inset-0 bg-gray-900 bg-opacity-75'></div>
               
        <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
        >
        
                
            {gallery.map((img) => (
                <div className='flex justify-center items-center p-5 pt-40' key={img.id}>                 
                    <img src={img.image} alt={img.image} className=' h-2/6 w-full rounded-xl drop-shadow-2xl'/>
                </div>
            ))}
        </Slider>
        <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
        >
            {gallery.map((img) => (
                <div className='p-5' key={img.id}>                 
                    <img src={img.image} alt={img.image} className='h-[50px] md:h-[200px] w-full rounded-xl drop-shadow-xl'/>
                 </div>
            ))}
        </Slider>
    </div>
  )
}}



{/*<div className='w-full relative'>
        <div className='absolute inset-0 bg-gray-900 bg-opacity-50'></div>
        <div className='absolute flex flex-col justify-evenly h-full ml-5 md:ml-10 p-5'>
            <div className='flex flex-row items-center'>
                <img src={makati} alt='IMAGE' className='h-10 w-10 md:h-16 md:w-16'/>
                <div>
                    <h1 className='text-white text-xxs md:text-sm'>MAKATI CITY SUBWAY INC. A WHOLLY-OWNED SUBSIDIARY OF </h1>
                    <h1 className='text-white text-xxs md:text-sm'>PHILIPPINE INFRADEV HOLDINGS INC.</h1>
                </div>
            </div>
            <img src={logo} alt='LOGO' className='h-20 w-1/2 md:h-40 md:w-11/12'/>
            <button className='text-xxs md:text-xl tracking-wide text-white font-black bg-yellow uppercase w-1/2 md:w-2/4 py-1 md:py-3 md:px-5'>Learn More</button>
        </div>
        <img src={heroBG} alt='HERO' className='bg-black'/>
    </div>*/}
