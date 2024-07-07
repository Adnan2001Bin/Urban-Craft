import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const BedRoomCatagoriesPage = () => {


    return (
        <div >
            <div className='flex justify-between shadow-md w-full lg:h-96'>
                <div className='w-full h-72 md:h-96 lg:w-7/12 lg:h-full'>
                    <img className='w-full h-full' src="assets\Bedroom\pexels-pixabay-164595.jpg" alt="" /></div>
                <div className='BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden'>
                    <h1 className='text-6xl font-bold '>Bedroom Furniture</h1>
                    <h3 className='text-2xl font-medium mt-3'>GIVES YOUR COMFORT WITH REGAL TOUCH</h3>
                    <p className='text-lg mt-3'>HATIL is always there for you to provide extraordinary designs which deliver comfort with regal touch.</p>
                </div>
            </div>

            <div className='w-full mt-14 p-5'>
                <h1 className='text-center text-3xl text-orange-700 w'>Bedroom</h1>

                <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-y-4 lg:text-xl text-lg'>
                    <Link to='/BedroomSet' className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets/Bedroom/09.png" alt="Bedroom Set" />
                        </div>
                        <p className='text-center mt-3 font-mono font-semibold'>Bedroom Set</p>
                    </Link>


                    <Link to={'/Bed'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Bedroom\Getafe-207 (2).jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Bed</p>

                    </Link>

                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Bedroom\Table-091-4.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Reading table</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover'  src="assets\Bedroom\bedside_table_1658931431_b6844132_progressive.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Bed-Side Table</p>
                    </Link>



                    <Link to={'/Wardrobe'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover'  src="assets\Bedroom\Bradshaw-141.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Wardrobe</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover'  src="assets\Bedroom\81QntSgAspL._SX679_.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Dressing Table</p>
                    </Link>





                </div>
            </div>
        </div>
    )
}

export default BedRoomCatagoriesPage
