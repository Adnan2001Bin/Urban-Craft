import React from 'react'
import './LivingRoomCatagories.css'
import { Link } from 'react-router-dom'


const LivingRoomCatagories = () => {
  return (
    <div className='LivingRoomCatagories bg-white flex items-center shadow-xl mt-7 h-96'>
      <div className='bg-orange-50 w-3/5 h-full rounded-xl flex-col items-start justify-start'>
        <img className='w-full h-3/5 rounded-lg' src="assets\Livingroom\pexels-jvdm-1457842.jpg" alt="" />
        <h1 className='font-bold text-lg text-black text-center mt-2'>LIVING ROOM INTERIOR IDEAS</h1>
        <p className='text-xs text-center mt-1'>Transform your living room with our curated collection of interior ideas. Discover elegant designs and functional layouts for every style.</p>
        <Link to={'./LivingRoomCatagoriesPage'}>
          <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
        </Link>


      </div>
      <div className='grid grid-cols-2 gap-2 w-full h-full items-center'>
        <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="assets\Livingroom\ssc-3682157frontffeffectsresult.jpg" alt="" />
          <h1 className='text-xl font-bold'>SOFA</h1>
        </div>


        <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="assets\Livingroom\Bermuda-110 .png" alt="" />
          <h1 className='text-xl font-bold'>DIVAN</h1>
        </div>


        <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="assets\Livingroom\main-qimg-8c7c0b024c47d2989d182e88f69ab428-lq.jpg" alt="" />
          <h1 className='text-xl font-bold'>CENTER TABLE</h1>
        </div>


        <div className='shadow-md h-full LivingRoomItems cursor-pointer'>
          <img className='w-24 h-24 mb-2 ' src="assets\Livingroom\peo-primary-shoe-racks-hwortock-000-700a50ed91eb46289e7216ea75909833.jpg" alt="" />
          <div className='text-xl font-bold'>
            <h1>SHOE RACK</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LivingRoomCatagories
