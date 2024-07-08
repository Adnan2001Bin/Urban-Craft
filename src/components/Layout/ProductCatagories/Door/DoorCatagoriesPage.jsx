// import { useRef } from 'react'
import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const DoorCatagoriesPage = () => {


    return (
        <div >
            <div className='flex justify-between shadow-md w-full lg:h-96'>
                <div className='w-full sm:h-72 h-60 md:h-96 lg:w-7/12 lg:h-full'>
                    <img className='w-full h-full' src="public\assets\Door\pexels-pixabay-277787.jpg" alt="" /></div>
                <div className='BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden'>
                    <h1 className='text-2xl font-medium mt-3'>Masterful Entrances, Premium Doors Redefined</h1>
                    <p className='text-lg mt-3'>Redefine your entrances with masterfully crafted doors from our Premium collection. Elevate your home's aesthetic with doors that blend form and function, making every entrance a moment of luxury.</p>
                </div>
            </div>

            <div className='w-full lg:mt-14 mt-5 p-5'>
                <h1 className='text-center text-3xl text-orange-700 w'>Door</h1>

                <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-y-4 lg:text-xl text-lg'>
                    <Link to='/BedroomSet' className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="public\assets\Door\02-Solid-Wooden-Door.png" />
                        </div>
                        <p className='text-center mt-3 font-mono font-semibold'>Solid-Wooden-Door</p>
                    </Link>


                    <Link to={'/Bed'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="public\assets\Door\03-Solid-Engineered-Wooden-Door.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Solid-Engineered-Wooden-Door</p>

                    </Link>

                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="public\assets\Door\04-Solid-Wooden-Glass-Door.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Solid-Wooden-Glass-Door</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="public\assets\Door\07-Decorative-Veneered-Flush-Door.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Decorative-Veneered-Flush-Door</p>
                    </Link>



                    <Link to={'/Wardrobe'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="public\assets\Door\08-Decorative-Veneered-Glass-Door.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Decorative-Veneered-Glass-Door</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="public\assets\Door\09-Knock down door frame.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Knock down door frame</p>
                    </Link>





                </div>
            </div>
        </div>
    )
}

export default DoorCatagoriesPage








