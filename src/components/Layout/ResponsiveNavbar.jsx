import React, { useState, useRef } from 'react';
import ModalNav from './ModalNav';
// import { Link } from 'react-router-dom';

const ResponsiveNavbar = (props) => {
  const [visibleSection, setVisibleSection] = useState(null); // State to track visible section
  const bedroomRef = useRef(null);
  const dinningRef = useRef(null);
  const kidsTeenageRef = useRef(null)
  const LivingRoomRef = useRef(null)
  const OfficeRef = useRef(null)


  const handleBedroomToggle = () => {
    setVisibleSection(visibleSection === 'bedroom' ? null : 'bedroom');
  };

  const handleDinningToggle = () => {
    setVisibleSection(visibleSection === 'dinning' ? null : 'dinning');
  };

  const handlekidsTeenageToggle = () => {
    setVisibleSection(visibleSection === 'kidsTeenage' ? null : 'kidsTeenage')
  }

  const handleLivingRoomToggle = () => {
    setVisibleSection(visibleSection === 'LivingRoom' ? null : 'LivingRoom')
  }

  const handleOfficeToggle = () => {
    setVisibleSection(visibleSection === 'Office' ? null : 'Office')
  }



  return (
    <ModalNav onClose={props.onClose}>
    {/* to={'/'} */}
      <div >
        <div>
          <div className='flex justify-between items-center'>
            <img className='w-48' src="assets/HeaderImage/Studio Shodwe.png" alt="" />
            <img onClick={props.onClose} className='w-6 h-6 mr-5' src="public/assets/HeaderImage/x-button.png" alt="" />
          </div>

          <div className='ml-4 mt-5 text-3xl'>
            <div className='bed' onClick={handleBedroomToggle}>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>Bedroom</p>
                <img className='w-5 h-5' src="assets/HeaderImage/down-chevron.png" alt="" />
              </div>
              <div ref={bedroomRef} className={visibleSection === 'bedroom' ? '' : 'hidden'}>
                <div className='flex items-center shadow-xl ml-3 mt-5 mb-5 mr-5'>
                  <div className='bg-orange-50 w-3/5 h-full rounded-xl flex-col items-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets/Bedroom/pexels-pixabay-210604.jpg" alt="" />
                    <h1 className='font-bold text-lg text-black text-center mt-1'>BEDROOM INTERIOR IDEAS</h1>
                    <p className='text-xs text-center mt-1'>Discover inspiring bedroom interior ideas to transform your space into a cozy retreat. From minimalist designs to bold color schemes, find your perfect style.</p>
                    {/* to={'/BedRoomCatagoriesPage'} */}
                    <div >
                      <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm'>Show All</button>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-2 w-full h-full items-center'>
                  {/* to={'/Bed'} */}
                    <div  className='shadow-md h-full bedItems cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="assets/Bedroom/DSC_4815.jpg" alt="" />
                      <h1 className='text-xl font-bold'>BED</h1>
                    </div>
                    <div className='shadow-md h-full bedItems cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="assets/Bedroom/Cosmos-110.png" alt="" />
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
                <div className='flex items-center shadow-xl'>
                  <div className='bg-orange-50 w-3/5 h-full rounded-xl flex-col items-start justify-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets/Dinning/pexels-zhengdong-hu-297240489-13490214.jpg" alt="" />
                    <h1 className='font-bold text-xl text-black text-center mt-2'>DINNING INTERIOR IDEAS</h1>
                    <p className='text-xs text-center mt-1'>Enhance your dining experience with our curated collection of interior ideas. Discover elegant designs, cozy atmospheres, and functional layouts for your dining space.</p>
                    <div to={'./DinningRoomCatagoriesPage'}>
                      <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm'>Show All</button>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-2 w-full h-full items-start mt-7'>
                    <div className='shadow-xl h-full dinningItems cursor-pointer'>
                      <img className='w-24 h-24 mb-2' src="assets/Dinning/h8a2_mo9e_210924.jpg" alt="" />
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



            <div onClick={handlekidsTeenageToggle}>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>KidsTeenage</p>
                <img className='w-5 h-5' src="assets/HeaderImage/down-chevron.png" alt="" />
              </div>


              <div ref={kidsTeenageRef} className={visibleSection === 'kidsTeenage' ? '' : 'hidden'}>
                <div className='flex items-center shadow-xl'>
                  <div className='bg-orange-50 w-3/5 h-full rounded-xl flex-col items-start justify-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets\KidsTeenage\becca-casey-darien-ct-lo-15-64c018f8dce2b.jpeg" alt="" />
                    <h1 className='font-bold text-lg text-black text-center mt-1'>KID'S ROOM INTERIOR</h1>
                    <p className='text-xs text-center mt-1'>Explore imaginative and playful kids' room interior ideas with our curated collection. From vibrant themes to functional spaces, discover designs that inspire creativity and comfort.</p>
                    <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>


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
              </div>
            </div>



            <div onClick={handleLivingRoomToggle}>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>Living Room</p>
                <img className='w-5 h-5' src="assets/HeaderImage/down-chevron.png" alt="" />
              </div>


              <div ref={LivingRoomRef} className={visibleSection === 'LivingRoom' ? '' : 'hidden'}>
                <div className=' flex items-center shadow-xl'>
                  <div className='bg-orange-50 w-3/5 h-full rounded-xl flex-col items-start justify-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets\Livingroom\pexels-jvdm-1457842.jpg" alt="" />
                    <h1 className='font-bold text-lg text-black text-center mt-2'>LIVING ROOM INTERIOR IDEAS</h1>
                    <p className='text-xs text-center mt-1'>Transform your living room with our curated collection of interior ideas. Discover elegant designs and functional layouts for every style.</p>
                    {/* to={'./LivingRoomCatagoriesPage'} */}
                    <div >
                      <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
                    </div>


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
                <div className=' flex items-center shadow-xl'>
                  <div className='bg-orange-50 w-3/5 h-full rounded-xl flex-col items-start justify-start'>
                    <img className='w-full h-3/5 rounded-lg' src="assets\Office\pexels-achraf-borkadi-440724799-19893586.jpg" alt="" />
                    <h1 className='font-bold text-lg text-black text-center mt-2'>Office ROOM INTERIOR IDEAS</h1>
                    <p className='text-xs text-center mt-1'>Explore a range of office room interior ideas to elevate your workspace. From minimalist designs to cozy setups, find inspiration for your ideal office ambiance.</p>
                    {/* to={'./OfficeCatagoriesPage'} */}
                    <div >
                      <button className='bg-black w-24 mt-2 ml-20 hover:bg-gray-700 rounded-3xl h-7 text-white text-sm '>Show All</button>
                    </div>



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


            <div>
              <div className='flex justify-between items-center font-medium m-3 hover:bg-gray-100'>
                <p>Chair</p>
                
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
