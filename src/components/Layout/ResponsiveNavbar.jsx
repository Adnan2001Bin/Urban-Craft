import React, { useState, useRef } from 'react';
import ModalNav from './ModalNav';
import { Link } from 'react-router-dom';

const ResponsiveNavbar = (props) => {
  const [visibleSection, setVisibleSection] = useState(null);
  const bedroomRef = useRef(null);
  const dinningRef = useRef(null);
  const LivingRoomRef = useRef(null)
  const OfficeRef = useRef(null)
  const DoorRef = useRef(null)


  const handleBedroomToggle = () => {
    setVisibleSection(visibleSection === 'bedroom' ? null : 'bedroom');
  };

  const handleDinningToggle = () => {
    setVisibleSection(visibleSection === 'dinning' ? null : 'dinning');
  };

  const handleLivingRoomToggle = () => {
    setVisibleSection(visibleSection === 'LivingRoom' ? null : 'LivingRoom')
  }

  const handleOfficeToggle = () => {
    setVisibleSection(visibleSection === 'Office' ? null : 'Office')
  }

  const handleDoorToggle = () => {
    setVisibleSection(visibleSection === 'Door' ? null : 'Door')
  }



  return (
    <ModalNav onClose={props.onClose}>
      {/* to={'/'} */}
      <div className=''>
        <div className=''>
          <Link onClick={props.onClose} to={'/'} className='flex justify-between items-center '>
            <img className='w-48' src="assets/HeaderImage/Studio Shodwe.png" alt="" />
            <img onClick={props.onClose} className='w-6 h-6 mr-5' src="public/assets/HeaderImage/x-button.png" alt="" />
          </Link>

          <div className='ml-4 mt-5 text-3xl'>
            <div className='bed' onClick={handleBedroomToggle}>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>Bedroom</p>
                <img className='w-5 h-5' src="assets/HeaderImage/down-chevron.png" alt="" />
              </div>
              <div ref={bedroomRef} className={visibleSection === 'bedroom' ? '' : 'hidden'}>
                <div className='sm:flex sm:flex-row flex flex-col shadow-xl ml-3 mt-5 mb-5 mr-5'>
                  <div className='bg-orange-50 sm:w-3/5 w-11/12 h-full rounded-xl flex-col items-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets/Bedroom/pexels-pixabay-210604.jpg" alt="" />
                    <h1 className='font-bold text-lg text-black text-center mt-1'>BEDROOM INTERIOR IDEAS</h1>
                    <p className='text-xs text-center mt-1'>Discover inspiring bedroom interior ideas to transform your space into a cozy retreat. From minimalist designs to bold color schemes, find your perfect style.</p>
                    <Link to={'/BedRoomCatagoriesPage'} onClick={props.onClose}>
                      <button className='bg-black w-24 mt-2 sm:ml-20 ml-28 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm'>Show All</button>
                    </Link>
                  </div>
                  <div className='grid grid-cols-2 gap-2 w-full h-full items-center sm:mt-0 mt-3'>
                    {/* to={'/Bed'} */}
                    <div className='shadow-md h-full bedItems cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="assets/Bedroom/DSC_4815.jpg" alt="" />
                      <h1 className='text-xl font-bold'>BED</h1>
                    </div>
                    <div className='shadow-md h-full bedItems cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="assets\Bedroom\Cosmos-110 .png" alt="" />
                      <h1 className='text-xl font-bold'>BED SIDE TABLE</h1>
                    </div>
                    <div className='shadow-md h-full bedItems cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="assets/Bedroom/Crush-144.png" alt="" />
                      <h1 className='text-xl font-bold'>DRESSING TABLE</h1>
                    </div>
                    <div className='shadow-md h-full bedItems cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="assets/Bedroom/Bradshaw-141.png" alt="" />
                      <h1 className='text-xl font-bold'>WARDROBE</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div onClick={handleDinningToggle}>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>Dinning</p>
                <img className='w-5 h-5' src="assets/HeaderImage/down-chevron.png" alt="" />
              </div>
              <div ref={dinningRef} className={visibleSection === 'dinning' ? '' : 'hidden'}>
                <div className='sm:flex sm:flex-row flex flex-col shadow-xl ml-3 mt-5 mb-5 mr-5'>
                  <div className='bg-orange-50 sm:w-3/5 w-11/12 h-full rounded-xl flex-col items-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets/Dinning/pexels-zhengdong-hu-297240489-13490214.jpg" alt="" />
                    <h1 className='font-bold text-xl text-black text-center mt-2'>DINNING INTERIOR IDEAS</h1>
                    <p className='text-xs text-center mt-1'>Enhance your dining experience with our curated collection of interior ideas. Discover elegant designs, cozy atmospheres, and functional layouts for your dining space.</p>
                    <Link to={'/DinningRoomCatagoriesPage'} onClick={props.onClose}>
                      <button className='bg-black w-24 mt-2 sm:ml-20 ml-28 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm'>Show All</button>
                    </Link>
                  </div>
                  <div className='grid grid-cols-2 gap-2 w-full h-full items-start mt-7'>
                    <div className='shadow-xl h-full dinningItems cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="public\assets\Dinning\Artemis-113 and Mandolin-103 (4 Chair and 1 Table Top + Leg).jpg" alt="" />
                      <h1 className='text-xl font-bold'>Dinning</h1>
                      <div className='ml-7'>
                        <ul className='text-sm font-medium list-disc'>
                          <li className='hover:text-red-500'>8-Seater Dining Table Set</li>
                          <li className='hover:text-red-500'>4-Seater Dining Table Set</li>
                          <li className='hover:text-red-500'>Dining Table Set With Wooden Top</li>
                          <li className='hover:text-red-500'>8-Seater Dining Table Set</li>
                        </ul>
                      </div>
                    </div>
                    <div className='dinningItems shadow-xl h-full cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="assets/Dinning/table-setting-dinner.jpg" alt="" />
                      <h1 className='text-xl font-bold'>Dinning</h1>
                      <ul className='text-sm font-medium list-disc'>
                        <li className='hover:text-red-500'>High-Quality Cutlery Sets</li>
                        <li className='hover:text-red-500'>Elegant Table Decor</li>
                        <li className='hover:text-red-500'>Cozy Dining Chairs</li>
                        <li className='hover:text-red-500'>Stylish Serving Trays</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div onClick={handleLivingRoomToggle}>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>Living Room</p>
                <img className='w-5 h-5' src="assets/HeaderImage/down-chevron.png" alt="" />
              </div>


              <div ref={LivingRoomRef} className={visibleSection === 'LivingRoom' ? '' : 'hidden'}>
                <div className=' sm:flex sm:flex-row flex flex-col shadow-xl ml-3 mt-5 mb-5 mr-5'>
                  <div className='bg-orange-50 sm:w-3/5 w-11/12 h-full rounded-xl flex-col items-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets\Livingroom\pexels-jvdm-1457842.jpg" alt="" />
                    <h1 className='font-bold text-lg text-black text-center mt-2'>LIVING ROOM INTERIOR IDEAS</h1>
                    <p className='text-xs text-center mt-1'>Transform your living room with our curated collection of interior ideas. Discover elegant designs and functional layouts for every style.</p>

                    <Link to={'/LivingRoomCatagoriesPage'} onClick={props.onClose}>
                      <button className='bg-black w-24 mt-2 sm:ml-20 ml-28 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
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
              </div>
            </div>


            <div onClick={handleOfficeToggle}>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>Office</p>
                <img className='w-5 h-5' src="assets/HeaderImage/down-chevron.png" alt="" />
              </div>


              <div ref={OfficeRef} className={visibleSection === 'Office' ? '' : 'hidden'}>
                <div className=' sm:flex sm:flex-row flex flex-col shadow-xl ml-3 mt-5 mb-5 mr-5'>
                  <div className='bg-orange-50 sm:w-3/5 w-11/12 h-full rounded-xl flex-col items-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets\Office\pexels-achraf-borkadi-440724799-19893586.jpg" alt="" />
                    <h1 className='font-bold text-lg text-black text-center mt-2'>Office ROOM INTERIOR IDEAS</h1>
                    <p className='text-xs text-center mt-1'>Explore a range of office room interior ideas to elevate your workspace. From minimalist designs to cozy setups, find inspiration for your ideal office ambiance.</p>
                    <Link to={'/OfficeCatagoriesPage'} onClick={props.onClose}>
                      <button className='bg-black w-24 mt-2 sm:ml-20 ml-28 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm'>Show All</button>
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
              </div>
            </div>


            <div onClick={handleDoorToggle}>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>Door</p>
                <img className='w-5 h-5' src="assets/HeaderImage/down-chevron.png" alt="" />

              </div>

              <div ref={DoorRef} className={visibleSection === 'Door' ? '' : 'hidden'}>
                <div className='sm:flex sm:flex-row flex flex-col shadow-xl ml-3 mt-5 mb-5 mr-5 '>
                  <div className='bg-orange-50 sm:w-3/5 w-11/12 h-full rounded-xl flex-col items-start'>
                    <img className='w-full h-3/5 rounded-lg' src="public\assets\Door\pexels-zvolskiy-1544420.jpg" alt="" />
                    <h1 className='font-bold text-xl text-black text-center mt-2'>Doors</h1>
                    <p className='text-xs text-center mt-1'>Discover elegant doors that blend style and functionality, perfect for every room in your home.</p>
                    <Link to={'/DoorCatagoriesPage'}>
                      <button className='bg-black w-24 mt-2 sm:ml-20 ml-28 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm'>Show All</button>
                    </Link>

                  </div>
                  <div className='grid grid-cols-2 gap-2 w-full h-full items-center '>
                    <div className='shadow-md h-full doorItems cursor-pointer'>
                      <img className='w-48 h-52 mb-3' src="public\assets\Door\02-Solid-Wooden-Door.png" alt="" />
                      <h1 className='text-xl font-bold w-40 text-center '>Solid-Wooden-Door</h1>
                    </div>
                    <div className='doorItems h-full  cursor-pointer'>
                      <img className='w-48 h-52 mb-3 rounded-sm' src="public\assets\Door\03-Solid-Engineered-Wooden-Door.png" alt="" />
                      <h1 className='text-xl font-bold w-40 text-center '>Solid-Engineered-Wooden-Door</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>






          <div className='h-[1px] bg-gray-600 mt-10'></div>
        </div>
      </div>
    </ModalNav>
  );
};

export default ResponsiveNavbar;
