// import { useContext } from 'react'
// import CartContext from '../../Store/cart-context'

// const HeaderCartButton = (props) => {
//     const cartCtx= useContext(CartContext)

//     const numberOfCartItems = cartCtx.items.reduce((curNumber , item) =>{
//         return curNumber + item.amount
//     } , 0)



//   return (
//     <button onClick={props.onClick} className='flex'>

//             <img className='w-10 h-10' src="assets\HeaderImage\icons8-cart-100.png" alt="" />
//             <div className=' cartNumber flex justify-center items-center bg-black text-white w-6 h-6 rounded-full'>
//                 5
//             </div>
//         </button>
//   )
// }

// export default HeaderCartButton


import React from 'react'

import { useContext } from 'react'
// import CartContext from '../../Store/cart-context'

const HeaderCartButton = (props) => {
  // const cartCtx = useContext(CartContext)

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount
  // }, 0)



  return (
    <button onClick={props.onClick} className='flex'>

      <img className='w-10 h-10' src="assets\HeaderImage\icons8-cart-100.png" alt="" />
      <div className=' cartNumber flex justify-center items-center bg-black text-white w-6 h-6 rounded-full'>
        5
      </div>
    </button>
  )
}

export default HeaderCartButton
