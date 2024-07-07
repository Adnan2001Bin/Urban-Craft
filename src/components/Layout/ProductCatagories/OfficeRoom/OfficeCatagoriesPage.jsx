// import { useRef } from 'react'
import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const OfficeCatagoriesPage = () => {
   

    return (
        <div className='m-3'>
            <div className='flex justify-between shadow-md'>
                <div className='BedHeadingImg'>
                    <img className='w-full h-full' src="assets\Office\Catagory_Office.png" alt="" /></div>
                <div className='BedHeadingText  text-slate-700'>
                    <h1 className='text-6xl font-bold '>Office Room Furniture</h1>
                    <h3 className='text-2xl font-medium mt-3'>EASE YOUR BUSY TIME WITH WELL-ORGANIZED WORKPLACE</h3>
                    <p className='text-lg mt-3'>Organize your office room properly with HATIL office furnishing and ease your busy time by finding what you need at the moment without any hassle.</p>
                </div>
            </div>

            <div className='mt-14 '>
                <h1 className='text-center text-3xl text-orange-700 font-medium'>Dining Room</h1>

                <div className='grid grid-cols-4  text-2xl'>
                    <Link className='imgLink shadow-lg'>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Office\Nashville-101.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Sofa</p>
                    </Link>


                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Office\Hatil_OfficeTable.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Director Table</p>
                    </Link>

                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Office\Ontario-101-EB.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Conference Table</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Office\Barney-116.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Computer Table</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Office\01Wellington-102.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Reception Table</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Office\Aria-132.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Swivel Chair</p>
                    </Link>





                </div>
            </div>
        </div>
    )
}

export default OfficeCatagoriesPage
