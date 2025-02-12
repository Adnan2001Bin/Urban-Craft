// import { useRef } from 'react'
import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const OfficeCatagoriesPage = () => {
   

    return (
        <div >
            <div className='flex justify-between shadow-md w-full lg:h-96'>
                <div className='w-full sm:h-72 h-60 md:h-96 lg:w-7/12 lg:h-full'>
                    <img className='w-full h-full' src="assets\Office\Catagory_Office.png" alt="" /></div>
                <div className='BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden'>
                    <h1 className='text-6xl font-bold '>Office Room Furniture</h1>
                    <h3 className='text-2xl font-medium mt-3'>EASE YOUR BUSY TIME WITH WELL-ORGANIZED WORKPLACE</h3>
                    <p className='text-lg mt-3'>Organize your office room properly with HATIL office furnishing and ease your busy time by finding what you need at the moment without any hassle.</p>
                </div>
            </div>

            <div className='w-full lg:mt-14 mt-5 p-5'>
                <h1 className='text-center text-3xl text-orange-700 w'>Office Room</h1>

                <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-y-4 lg:text-xl text-lg'>
                    <Link to='/BedroomSet' className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Office\Nashville-101.png" alt="Bedroom Set" />
                        </div>
                        <p className='text-center mt-3 font-mono font-semibold'>Sofa</p>
                    </Link>


                    <Link to={'/Bed'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Office\Hatil_OfficeTable.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Director Table</p>

                    </Link>

                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Office\Ontario-101-EB.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Conference Table</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Office\Barney-116.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Computer Table</p>
                    </Link>



                    <Link to={'/Wardrobe'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Office\01Wellington-102.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Reception Table</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Office\Aria-132.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Swivel Chair</p>
                    </Link>





                </div>
            </div>
        </div>
    )
}

export default OfficeCatagoriesPage
