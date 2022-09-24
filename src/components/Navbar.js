import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/images/LOGO.png'

function Navbar ()  {
  const [ navbar, setNavbar ] = useState(false);

  return (
    <main className='block w-full md:fixed bg-white md:bg-transparent  md:backdrop-blur-sm bg-cover bg-center drop-shadow-md z-10'>
        <nav className="container-fluid p-0 mx-3.5">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex">
              <div>
                    <div className="flex items-center justify-between py-1 md:py-3 md:block">
                        <a href="/">
                            <img src={LOGO} className="h-14 md:h-20" alt="LOGO" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-slate-900 rounded-md outline-none focus:border-gray-700 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-black border-solid"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-black border-solid"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="flex flex-col uppercase text-xl md:flex-row md:item-center items-center justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
                            <Link to="/" className=""><h3 className="text-cyan-900 font-bold uppercase px-5 hover:underline underline-offset-8">home</h3></Link>
                            <Link to="/About"  className=""><h3 className="text-cyan-900 font-bold px-5 uppercase hover:underline underline-offset-8">about the project</h3></Link>             
                            <a href='#modelUnits' className="text-cyan-900 font-bold px-5 uppercase hover:underline underline-offset-8">Model Units</a>
                            <a href='#gallery' className="text-cyan-900 font-bold px-5 uppercase hover:underline underline-offset-8">Image Gallery</a>
                        </ul>
                    </div>
                </div>
            </div>
      </nav>
      </main>
    

  )
}

export default Navbar