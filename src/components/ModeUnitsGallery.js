import React from 'react'






function ModelUnitsGallery() {



//Model Unit Images
const Units = [
    '../assets/images/ModelUnits/UnitOne.webp',
    '../assets/images/ModelUnits/UnitTwo.webp',
    '../assets/images/ModelUnits/UnitThree.webp',
    '../assets/images/ModelUnits/UnitFour.webp'
];



  return (
    <div className='md:grid grid-cols-2'>

        {/*<div>
            <h1 className='uppercase'>model units</h1>
            <p>Great stories begin at home, but what surrounds a home 
                allows the chapters to fully unfold. Imagine a place where 
                one could enjoy city life while knowing that a personal hearth, 
                awaits one at the end of the day—and then make it a reality. 
            </p>
  </div>*/}

        <div>
            <img src={Units[2]} alt='' />
        </div>
            
    </div>
  )
}

export default ModelUnitsGallery