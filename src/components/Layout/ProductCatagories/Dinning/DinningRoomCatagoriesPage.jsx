// import { useRef } from 'react'
import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const DinningRoomCatagoriesPage = () => {
   

    return (
        <div className='m-3'>
            <div className='flex justify-between shadow-md'>
                <div className='BedHeadingImg'>
                    <img className='w-full h-full' src="assets\Dinning\dining-room-chandeliers.jpg" alt="" /></div>
                <div className='BedHeadingText  text-slate-700'>
                    <h1 className='text-6xl font-bold '>Dining Room Furniture</h1>
                    <h3 className='text-2xl font-medium mt-3'>ORGANIZE YOUR FAMILY MEAL TIME IN A COMFORTABLE STYLE</h3>
                    <p className='text-lg mt-3'>Enjoy every family meal time with HATIL’s eye-catching designed dining table set, as organized and comfortable as you want.</p>
                </div>
            </div>

            <div className='mt-14 '>
                <h1 className='text-center text-3xl text-orange-700 font-medium'>Dining Room</h1>

                <div className='grid grid-cols-4  text-2xl'>
                    <Link className='imgLink shadow-lg'>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Dinning\Comet-192and_Hibiscus-199 -wood .png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Dinning Room Set</p>
                    </Link>


                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Dinning\Acadia-197.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Dinning Chair</p>
                    </Link>

                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Dinning\Artemis-113 and Mandolin-103 (4 Chair and 1 Table Top + Leg).jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Cafeteria</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Bedroom\bedside_table_1658931431_b6844132_progressive.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Dinner Wagone</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Dinning\HATIL -Showcase Scofield-121 2+1.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Showcase</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Dinning\Fuji-102.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Tea Trolley</p>
                    </Link>





                </div>
            </div>
        </div>
    )
}

export default DinningRoomCatagoriesPage
