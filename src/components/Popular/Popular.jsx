import React from 'react'
import { Link } from 'react-router-dom'


const Popular = () => {
    return (
        <div className='lg:mt-7 sm:mt-48 mt-16'>
            <h1 className='ml-5 text-3xl'>Popular Furniture</h1>
            <div className=' w-full grid grid-cols-5 lg:gap-x-4 gap-x-48 lg:text-xl text-lg mt-3 overflow-x-scroll'>

                <Link className='p-4 lg:w-72 w-44 lg:h-80 h-60 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                    <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md '>
                        <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Popular\0009051_sofa_450.jpeg" alt="" />
                    </div>

                    <p className='text-center mt-1 mb-1 font-mono font-semibold'>Sofa</p>
                </Link>

                <Link className='p-4 lg:w-72 w-44 lg:h-80 h-60 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 '>
                    <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md'>
                        <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Popular\Hotel-Lobby-Chairs-Establishing-Comfort-and-Luxury.jpg" alt="" />
                    </div>

                    <p className='text-center mt-1 mb-1 font-mono font-semibold'>Lobby Chair</p>
                </Link>

                <Link className='p-4 lg:w-72 w-44 lg:h-80 h-60 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300  '>
                    <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md'>
                        <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Popular\Houston-111.jpg" alt="" />
                    </div>

                    <p className='text-center mt-1 mb-1 font-mono font-semibold'>Sofa with Divan</p>
                </Link>

                <Link className='p-4 lg:w-72 w-44 lg:h-80 h-60 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300  '>
                    <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md'>
                        <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Popular\Hatil_Dinner_10.jpg" alt="" />
                    </div>

                    <p className='text-center mt-1 mb-1 font-mono font-semibold'>Dining</p>
                </Link>

                <Link className='p-4 lg:w-72 w-44 lg:h-80 h-60 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300  '>
                    <div className='w-full lg:h-60 h-44 overflow-hidden relative rounded-md'>
                        <img className='transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover' src="assets\Popular\0009022_mini-cabinet_450.jpeg" alt="" />
                    </div>

                    <p className='text-center mt-1 mb-1 font-mono font-semibold'>Mini Cabinet</p>
                </Link>
            </div>
        </div>
    )
}

export default Popular






// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Popular.css';

// const Popular = () => {
//     return (
//         <div className='popular-container mt-7'>
//             <h1 className='ml-5 text-3xl'>Popular Furniture</h1>
//             <div className='popular-items flex flex-wrap text-2xl justify-center'>

//                 <Link className='imgLink shadow-lg '>
//                     <div className='imgBox'>
//                         <img className='imgItem' src="assets\Popular\0009051_sofa_450.jpeg" alt="" />
//                     </div>
//                     <p className='text-center mt-1 mb-1 font-mono font-semibold'>Sofa</p>
//                 </Link>

//                 <Link className='imgLink shadow-lg '>
//                     <div className='imgBox'>
//                         <img className='imgItem' src="assets\Popular\Hotel-Lobby-Chairs-Establishing-Comfort-and-Luxury.jpg" alt="" />
//                     </div>
//                     <p className='text-center mt-1 mb-1 font-mono font-semibold'>Lobby Chair</p>
//                 </Link>

//                 <Link className='imgLink shadow-lg '>
//                     <div className='imgBox'>
//                         <img className='imgItem' src="assets\Popular\Houston-111.jpg" alt="" />
//                     </div>
//                     <p className='text-center mt-1 mb-1 font-mono font-semibold'>Sofa with Divan</p>
//                 </Link>

//                 <Link className='imgLink shadow-lg '>
//                     <div className='imgBox'>
//                         <img className='imgItem' src="assets\Popular\Hatil_Dinner_10.jpg" alt="" />
//                     </div>
//                     <p className='text-center mt-1 mb-1 font-mono font-semibold'>Dining</p>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Popular;








// import React from 'react'
// import { Link } from 'react-router-dom'

// import './Popular.css'

// const Popular = () => {
//     return (
//         <div className='lg:mt-7 mt-40'>
//             <h1 className='ml-5 lg:text-3xl text-2xl '>Popular Furniture</h1>
//             <div className='lg:flex grid grid-cols-2 text-2xl'>

//                 <Link className='imgLink shadow-lg '>
//                     <div className='imgBox'>
//                         <img className='imgItem' src="assets\Popular\0009051_sofa_450.jpeg" alt="" />
//                     </div>

//                     <p className='text-center mt-1 mb-1 font-mono font-semibold'>Sofa</p>
//                 </Link>

//                 <Link className='imgLink shadow-lg '>
//                     <div className='imgBox'>
//                         <img className='imgItem' src="assets\Popular\Hotel-Lobby-Chairs-Establishing-Comfort-and-Luxury.jpg" alt="" />
//                     </div>

//                     <p className='text-center mt-1 mb-1 font-mono font-semibold'>Lobby Chair</p>
//                 </Link>

//                 <Link className='imgLink shadow-lg '>
//                     <div className='imgBox'>
//                         <img className='imgItem' src="assets\Popular\Houston-111.jpg" alt="" />
//                     </div>

//                     <p className='text-center mt-1 mb-1 font-mono font-semibold'>Sofa with Divan</p>
//                 </Link>

//                 <Link className='imgLink shadow-lg '>
//                     <div className='imgBox'>
//                         <img className='imgItem' src="assets\Popular\Hatil_Dinner_10.jpg" alt="" />
//                     </div>

//                     <p className='text-center mt-1 mb-1 font-mono font-semibold'>Dining</p>
//                 </Link>
//             </div>
//         </div>
//     )
// }

// export default Popular
