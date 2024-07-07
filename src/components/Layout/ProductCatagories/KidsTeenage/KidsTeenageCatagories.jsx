import React from 'react'
import './KidsTeenageCatagories.css'


const KidsTeenageCatagories = () => {
  return (
    <div className='KidsTeenageCatagories flex items-center shadow-xl mt-7 h-96'>
      <div className='bg-orange-50 w-3/5 h-full rounded-xl flex-col items-start justify-start'>
        <img className='w-full h-3/5 rounded-lg' src="assets\KidsTeenage\becca-casey-darien-ct-lo-15-64c018f8dce2b.jpeg" alt="" />
        <h1 className='font-bold text-lg text-black text-center mt-1'>KID'S ROOM INTERIOR</h1>
        <p className='text-xs text-center mt-1'>Explore imaginative and playful kids' room interior ideas with our curated collection. From vibrant themes to functional spaces, discover designs that inspire creativity and comfort.</p>
        <button  className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>


      </div>
      <div className='grid grid-cols-2 gap-2 w-full h-full items-center'>
        <div className='shadow-md h-full KidsTeenageItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="assets\KidsTeenage\71V6PamKxjL._SL1500_.jpg" alt="" />
          <h1 className='text-xl font-bold'>BED</h1>
        </div>


        <div className='shadow-md h-full KidsTeenageItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="assets\KidsTeenage\edd9b970094713e9705ede2f7632a60b.jpg" alt="" />
          <h1 className='text-xl font-bold'>BOOK SHELF</h1>
        </div>


        <div className='shadow-md h-full KidsTeenageItems cursor-pointer'>
          <img className='w-24 h-24 mb-2' src="assets\KidsTeenage\kids-playroom-game-room-storage-toy-organizer-ideas-country-living-1568924583.jpg" alt="" />
          <h1 className='text-xl font-bold'>TOY'S STORE</h1>
        </div>


        <div className='shadow-md h-full KidsTeenageItems cursor-pointer'>
          <img className='w-24 h-24 mb-2 ' src="assets\KidsTeenage\maisons_du_monde_kids_desk.jpg" alt="" />
          <div className='text-xl font-bold'>
            <h1>DESK</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KidsTeenageCatagories

