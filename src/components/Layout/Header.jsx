import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import BedroomCatagories from './ProductCatagories/Beedroom/BedroomCatagories';
import HeaderCartButton from './HeaderCartButton';
import DinningCatagories from './ProductCatagories/Dinning/DinningCatagories';
import LivingRoomCatagories from './ProductCatagories/LivingRoom/LivingRoomCatagories';
import OfficeCatagories from './ProductCatagories/OfficeRoom/OfficeCatagories';



const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <header className={`w-full bg-white lg:h-20 border-b-2 border-gray-200 flex items-center px-10 lg:px-20 justify-between  ${scrolled ? 'fixed top-0 z-10' : ''}`}>
        <div>
          <img className='w-44 lg:w-48' src="assets/HeaderImage/Studio Shodwe.png" alt="Studio Shodwe" />
        </div>

        <div className='lg:flex lg:justify-center lg:items-center  lg:w-7/12 lg:h-9 lg:gap-3 font-MyFont font-medium text-base hover:bg-blue-50 hover:rounded-lg  hidden'>
          <div className='relative group ml-5 '>
            <div className='flex items-center justify-between gap-2'>
              <button className='hover:font-semibold hover:underline flex items-center '>Bedroom</button>
              <img className='dropdown w-2 h-2 transform transition-transform duration-300 group-hover:rotate-180' src="public/assets/HeaderImage/arrow-down.png" alt="" />
            </div>
            <div className='absolute z-[999] hidden group-hover:block'>
              <BedroomCatagories />
            </div>
          </div>

          <div className='relative group ml-5 '>
            <div className='flex items-center justify-between gap-2'>
              <button className='hover:font-semibold hover:underline flex items-center '>Dinning</button>
              <img className='dropdown w-2 h-2 transform transition-transform duration-300 group-hover:rotate-180' src="public/assets/HeaderImage/arrow-down.png" alt="" />
            </div>
            <div className='absolute  z-[999] hidden group-hover:block'>
              <DinningCatagories />
            </div>
          </div>

         

          <div className='relative group ml-5 '>
            <div className='flex items-center justify-between gap-2'>
              <button className='hover:font-semibold hover:underline flex items-center '>Living Room</button>
              <img className='dropdown w-2 h-2 transform transition-transform duration-300 group-hover:rotate-180' src="public/assets/HeaderImage/arrow-down.png" alt="" />
            </div>
            <div className='absolute z-[999] hidden group-hover:block'>
              <LivingRoomCatagories />
            </div>
          </div>

          <div className='relative group ml-5 '>
            <div className='flex items-center justify-between gap-2'>
              <button className='hover:font-semibold hover:underline flex items-center '>Office</button>
              <img className='dropdown w-2 h-2 transform transition-transform duration-300 group-hover:rotate-180' src="public/assets/HeaderImage/arrow-down.png" alt="" />
            </div>
            <div className='absolute z-[999] hidden group-hover:block'>
              <OfficeCatagories />
            </div>
          </div>

          <div className='relative group ml-5 '>
            <div className='flex items-center justify-between gap-2'>
              <button className='hover:font-semibold hover:underline flex items-center '>Bedroom</button>
              <img className='dropdown w-2 h-2 transform transition-transform duration-300 group-hover:rotate-180' src="public/assets/HeaderImage/arrow-down.png" alt="" />
            </div>
            <div className='absolute z-[999] hidden group-hover:block'>
              <BedroomCatagories />
            </div>
          </div>
        </div>

        <div className='w-70 flex'>
          <div className='hidden lg:flex lg:items-center lg:bg-gray-100 rounded-3xl lg:w-48 lg:h-10'>
            <img className='w-5 h-5 ml-4 cursor-pointer' src="assets/HeaderImage/search.png" alt="" />
            <input className='bg-gray-100 w-3/4 ml-1 outline-none text-sm' placeholder='Search for products' type="text" />
          </div>

          <HeaderCartButton onClick={props.onShowCart} />

          <div onClick={props.onShowNav}>
            <img className='w-8 ml-5 lg:hidden' src="public/assets/HeaderImage/burger-bar.png" alt="" />
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
