import React from 'react'
import './OfficeCatagories.css'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const OfficeCatagories = () => {
    return (
        <div className='OfficeCatagories bg-white flex items-center shadow-xl mt-7 h-96'>
            <div className='bg-orange-50 w-3/5 h-full rounded-xl flex-col items-start justify-start'>
                <img className='w-full h-3/5 rounded-lg' src="assets\Office\pexels-achraf-borkadi-440724799-19893586.jpg" alt="" />
                <h1 className='font-bold text-lg text-black text-center mt-2'>Office ROOM INTERIOR IDEAS</h1>
                <p className='text-xs text-center mt-1'>Explore a range of office room interior ideas to elevate your workspace. From minimalist designs to cozy setups, find inspiration for your ideal office ambiance.</p>
                <Link to={'./OfficeCatagoriesPage'}>
                    <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
                </Link>



            </div>
            <div className='grid grid-cols-2 gap-2 w-full h-full items-center'>
                <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2' src="assets\Office\Apostrophe-316 -1.png" alt="" />
                    <h1 className='text-xl font-bold'>SOFA</h1>
                </div>


                <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2' src="assets\Office\Emerald-107.png" alt="" />
                    <h1 className='text-xl font-bold'>Conference Table</h1>
                </div>


                <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2' src="assets\Office\office-computer-table-1000x1000.jpg" alt="" />
                    <h1 className='text-xl font-bold'>COMPUTER TABLE</h1>
                </div>


                <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
                    <img className='w-24 h-24 mb-2 ' src="assets\Office\Alessandro-204 .png" alt="" />
                    <div className='text-xl font-bold'>
                        <h1>Swivel Chair</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfficeCatagories
