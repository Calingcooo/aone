import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [ BackToTop, setBackToTop ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo ({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div className='fixed bottom-0 left-1/2 z-10'>
        {BackToTop &&  (
            <div className='arrow drop-shadow-2xl' onClick={scrollUp}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )}
    </div>
  )
}
export default BackToTop