import React, { useState } from 'react'

//1 Bedroom Studio Images
import studioThree from '../../../data/Studio3BR'

function StudioOneGallery() {

    const [ selectedImage, setSelectedImage ] = useState(studioThree[0])


    const handleClick = (index) => {
        console.log(index)
        const slider = studioThree[index]
        setSelectedImage(slider)
    }
  return (
    <div className='block m-5 h-full mt-10 md:mt-40'>

        <div className='col-span-4 flex justify-center md:my-10'>
            <h1 className='col-span-4 text-center text-cyan-900 font-black text-lg md:text-5xl uppercase tracking-normal px-7 md:px-14'>Schematic Design - 3 Bedroom Corner -B Unit </h1>
        </div>

        <div className='drop-shadow-xl'>
            <img src={selectedImage.image} className='w-full h-full border rounded-lg' alt='IMAGE SLIDER'/>
        </div>

        <div className='flex flex-row justify-center items-center mt-5'>
            {studioThree.map((img, i) => (
                <div key={img.id} className='m-1 md:m-5 md:h-full'>
                    <img src={img.image} alt={img.image} className='drop-shadow-sm w-full border' 
                       onClick={() => handleClick(i)} 
                       style={img === selectedImage ? { border: "2px solid black"} : {}}/>
                </div>
            ))}
        </div>
                
    </div>
       
    
  )
}

export default StudioOneGallery