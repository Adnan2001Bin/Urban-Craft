// import { useRef } from 'react'
import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const DinningRoomCatagoriesPage = () => {


    return (
        <div >
            <div className='flex justify-between shadow-md w-full lg:h-96'>
                <div className='w-full sm:h-72 h-60 md:h-96 lg:w-7/12 lg:h-full'>
                    <img className='w-full h-full' src="assets\Dinning\dining-room-chandeliers.jpg" alt="" /></div>
                <div className='BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden'>
                    <h1 className='text-6xl font-bold '>Dining Room Furniture</h1>
                    <h3 className='text-2xl font-medium mt-3'>ORGANIZE YOUR FAMILY MEAL TIME IN A COMFORTABLE STYLE</h3>
                    <p className='text-lg mt-3'>Enjoy every family meal time with HATIL’s eye-catching designed dining table set, as organized and comfortable as you want.</p>
                </div>
            </div>

            <div className='w-full lg:mt-14 mt-5 p-5'>
                <h1 className='text-center text-3xl text-orange-700 w'>Dining Room</h1>

                <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-y-4 lg:text-xl text-lg'>
                    <Link to='/BedroomSet' className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Dinning\Comet-192and_Hibiscus-199 -wood .png" />
                        </div>
                        <p className='text-center mt-3 font-mono font-semibold'>Dinning Room Set</p>
                    </Link>


                    <Link to={'/Bed'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Dinning\Acadia-197.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Dinning Chair</p>

                    </Link>

                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Dinning\Artemis-113 and Mandolin-103 (4 Chair and 1 Table Top + Leg).jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Cafeteria</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Bedroom\bedside_table_1658931431_b6844132_progressive.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Dinner Wagone</p>
                    </Link>



                    <Link to={'/Wardrobe'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Dinning\HATIL -Showcase Scofield-121 2+1.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Showcase</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Dinning\Fuji-102.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Tea Trolley</p>
                    </Link>





                </div>
            </div>
        </div>
    )
}

export default DinningRoomCatagoriesPage








