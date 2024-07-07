import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const LivingRoomCatagoriesPage = () => {


    return (
<div >
            <div className='flex justify-between shadow-md w-full lg:h-96'>
                <div className='w-full sm:h-72 h-60 md:h-96 lg:w-7/12 lg:h-full'>
                    <img className='w-full h-full' src="assets\Livingroom\Living Catagory 1098x380.jpg" alt="" /></div>
                <div className='BedHeadingText  lg:text-slate-700 lg:w-5/12 lg:flex lg:flex-col lg:h-full font-MyFont pl-7 pt-20  hidden'>
                    <h1 className='text-6xl font-bold '>Livingroom Furniture</h1>
                    <h3 className='text-2xl font-medium mt-3'>COMFY & BEAUTY AT ITS BEST</h3>
                    <p className='text-lg mt-3'>Explore our Interior collection for premium furniture that blends exquisite craftsmanship with timeless elegance. Discover furniture that transcends trends, offering a timeless elegance that transforms your space into a sanctuary of sophistication.</p>
                </div>
            </div>

            <div className='w-full lg:mt-14 mt-5 p-5'>
                <h1 className='text-center text-3xl text-orange-700 w'>Bedroom</h1>

                <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-5 gap-y-4 lg:text-xl text-lg'>
                    <Link to='/BedroomSet' className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Livingroom\Denver-331 1.jpg" alt="Bedroom Set" />
                        </div>
                        <p className='text-center mt-3 font-mono font-semibold'>Sofa</p>
                    </Link>


                    <Link to={'/Bed'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Livingroom\Center Table.jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Center Table</p>

                    </Link>

                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Livingroom\Bermuda-110.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Divan</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Livingroom\Sofa Set(automan).jpg" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Chair</p>
                    </Link>



                    <Link to={'/Wardrobe'} className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Livingroom\Emily-113.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>TV Cabinet</p>
                    </Link>



                    <Link className='p-4 lg:w-64 w-44 lg:h-80 h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300'>
                        <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                            <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Livingroom\Ballet-102.png" alt="" />
                        </div>

                        <p className='text-center mt-3 font-mono font-semibold'>Shoe Rack</p>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default LivingRoomCatagoriesPage


































