import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const LivingRoomCatagoriesPage = () => {


    return (
        <div className='m-3'>
            <div className='flex justify-between shadow-md'>
                <div className='BedHeadingImg'>
                    <img className='w-full h-full' src="assets\Livingroom\Living Catagory 1098x380.jpg" alt="" /></div>
                <div className='BedHeadingText  text-slate-700'>
                    <h1 className='text-6xl font-bold '>Livingroom Furniture</h1>
                    <h3 className='text-2xl font-medium mt-3'>COMFY & BEAUTY AT ITS BEST</h3>
                    <p className='text-lg mt-3'>Explore our Interior collection for premium furniture that blends exquisite craftsmanship with timeless elegance. Discover furniture that transcends trends, offering a timeless elegance that transforms your space into a sanctuary of sophistication.</p>
                </div>
            </div>

            <div className='mt-14 '>
                <h1 className='text-center text-3xl text-orange-700 w'>Bedroom</h1>

                <div className='grid grid-cols-4  text-2xl'>
                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Livingroom\Denver-331 1.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Sofa</p>
                    </Link>


                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Livingroom\Center Table.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Center Table</p>
                    </Link>

                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Livingroom\Bermuda-110.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Divan</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Livingroom\Sofa Set(automan).jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>hair</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="src\assets\Livingroom\Emily-113.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>TV Cabinet</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Livingroom\Ballet-102.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Shoe Rack</p>
                    </Link>





                </div>
            </div>
        </div>
    )
}

export default LivingRoomCatagoriesPage
