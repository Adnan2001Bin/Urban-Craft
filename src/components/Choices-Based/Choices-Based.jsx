import React from 'react'
import './Choices_Based.css'


const Choices_Based = () => {
    return (
        // flex ml-2 mr-2 mt-5
        <div className=' lg:flex lg:ml-2 lg:mr-2 lg:mt-5 mt-5 w-full lg:pl-2 sm:pl-10'>
            <div className=' w-1/2 ChoicesText lg:ml-0 sm:ml-36 ml-20'>
                <h1 className='lg:text-7xl text-5xl text-end mr-3'>Creations with purpose</h1>
                <p className='lg:text-4xl text-2xl font-normal mt-5 text-end mr-3'>Many choices based on your space</p>
                <div className='flex justify-end mr-3'>
                <button className='lg:mt-10 lg:w-40 lg:h-11 mt-8 w-32 h-10 bg-slate-50 text-lg border-solid border-2 border-amber-500 rounded-2xl font-medium sm:mr-24 mr-2'>Explore Now</button>
                </div>
            </div>

            <div className=' grid grid-cols-3 lg:w-4/6 lg:ml-5 lg:gap-3 sm:w-11/12 gap-2 mt-5'>
                <div className="relative w-full lg:h-72 sm:h-60 h-52">
                    <img
                        src="assets\ChoicesBased\Bed_417x425_Jan24.jpg"
                        alt="Chair"
                        className="w-full h-full object-cover"
                    />
                    <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                        <div className=' w-8/12 h-48 flex justify-center items-center border-solid border-2 border-white'>
                            <span className="text-white md:text-3xl sm:text-xl text-lg font-bold text-center">Bed Room</span>
                        </div>
                    </div>
                </div>

                <div className="relative w-full lg:h-72 sm:h-60 h-52">
                    <img
                        src="assets\ChoicesBased\BossTable_417x425_Jan24.jpg"
                        alt="Chair"
                        className="w-full h-full object-cover"
                    />
                    <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                        <div className=' w-8/12 h-48 flex justify-center items-center border-solid border-2 border-white'>
                            <span className="text-white md:text-3xl font-bold text-center sm:text-xl text-lg">Office Space</span>
                        </div>
                    </div>
                </div>

                <div className="relative w-full lg:h-72 sm:h-60 h-52">
                    <img
                        src="assets\ChoicesBased\Dining_417x425_Jan24.jpg"
                        alt="Chair"
                        className="w-full h-full object-cover"
                    />
                    <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                        <div className=' w-8/12 h-48 flex justify-center items-center border-solid border-2 border-white'>
                            <span className="text-white md:text-3xl font-bold text-center sm:text-xl text-lg">Dining Space</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative w-full lg:h-72 sm:h-60 h-52">
                    <img
                        src="assets\ChoicesBased\IndustrialChair_417x425_Jan24.jpg"
                        alt="Chair"
                        className="w-full h-full object-cover"
                    />
                    <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                        <div className=' w-8/12 h-48 flex justify-center items-center border-solid border-2 border-white'>
                            <span className="text-white md:text-3xl font-bold text-center sm:text-xl text-lg">Industrial Space</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative w-full lg:h-72 sm:h-60 h-52">
                    <img
                        src="assets\ChoicesBased\Kitchen_417x425_Jan24.jpg"
                        alt="Chair"
                        className="w-full h-full object-cover"
                    />
                    <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                        <div className=' w-8/12 h-48 flex justify-center items-center border-solid border-2 border-white'>
                            <span className="text-white md:text-3xl font-bold text-center sm:text-xl text-lg">Kitchen Collection</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative w-full lg:h-72 sm:h-60 h-52">
                    <img
                        src="assets\ChoicesBased\Sofa_417x425_Jan24.jpg"
                        alt="Chair"
                        className="w-full h-full object-cover"
                    />
                    <div className=" absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                        <div className=' w-8/12 h-48 flex justify-center items-center border-solid border-2 border-white'>
                            <span className="text-white md:text-3xl font-bold text-center sm:text-xl text-lg">Living Room</span>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        </div>

    );
}

export default Choices_Based
