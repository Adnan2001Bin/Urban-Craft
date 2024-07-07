import React from 'react'
import '../CatagoriesPage.css'
import { Link } from 'react-router-dom'

const BedRoomCatagoriesPage = () => {


    return (
        <div className='m-3'>
            <div className='flex justify-between shadow-md'>
                <div className='BedHeadingImg'>
                    <img className='w-full h-full' src="assets\Bedroom\pexels-pixabay-262048.jpg" alt="" /></div>
                <div className='BedHeadingText  text-slate-700'>
                    <h1 className='text-6xl font-bold '>Bedroom Furniture</h1>
                    <h3 className='text-2xl font-medium mt-3'>GIVES YOUR COMFORT WITH REGAL TOUCH</h3>
                    <p className='text-lg mt-3'>HATIL is always there for you to provide extraordinary designs which deliver comfort with regal touch.</p>
                </div>
            </div>

            <div className='mt-14 '>
                <h1 className='text-center text-3xl text-orange-700 w'>Bedroom</h1>

                <div className='grid grid-cols-4  text-2xl'>
                    <Link to={'/BedroomSet'} className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Bedroom\09.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Bed Room Set</p>
                    </Link>


                    <Link to={'/Bed'} className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Bedroom\Getafe-207 (2).jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Bed</p>

                    </Link>

                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Bedroom\Table-091-4.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Reading table</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Bedroom\bedside_table_1658931431_b6844132_progressive.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Bed-Side Table</p>
                    </Link>



                    <Link to={'/Wardrobe'} className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Bedroom\Bradshaw-141.png" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Wardrobe</p>
                    </Link>



                    <Link className='imgLink shadow-lg '>
                        <div className='imgBox'>
                            <img className='imgItem' src="assets\Bedroom\81QntSgAspL._SX679_.jpg" alt="" />
                        </div>

                        <p className='text-center mt-1 mb-1 font-mono font-semibold'>Dressing Table</p>
                    </Link>





                </div>
            </div>
        </div>
    )
}

export default BedRoomCatagoriesPage
