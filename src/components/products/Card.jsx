import React, { useContext } from "react";
import "./Card.css";
import Form from "./others/Form";
import CartContext from "../../Store/cart-context";
import { Cookies } from "react-cookie";

const Card = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `Starts From ${props.price} BDT`;
  const cookies = new Cookies();

  cookies.set('cartItems', JSON.stringify(cartCtx.items), { path: '/' });

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      img: props.img,
      amount: amount,
      price: props.price
    })
  }

  return (
    // <div className=' productsimgLink shadow-lg'>
    //   <div className='productsBox '>
    //     <img className=' productsImg' src={props.img} alt="" />

    //   </div>
    //   <div className='w-full relative left-32 top-2'>
    //     <div className='flex justify-between under'>
    //       <div >
    //         <h1 className='text-center text-xl font-sans font-semibold'>
    //           {props.name}
    //         </h1>
    //         <p className='text-center text-lg font-sans font-normal mt-2'>{price}</p>
    //       </div>

    //       <Form />
    //     </div>
    //   </div>
    // </div>

    <div className="p-4 lg:w-11/12 w-44 lg:h-full h-64 shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 ">
      <div className="w-full lg:h-80 h-44 overflow-hidden relative rounded-md ">
        <img
          className="transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover"
          src={props.img}
          alt="Bedroom Set"
        />
      </div>
      <div className="mb-5">
        <h1 className="text-center text-xl text-slate-700 font-sans font-semibold">
          {props.name}
        </h1>
        <p className="text-center  mt-1 font-mono font-bold">{price}</p>
      </div>
      <Form onAddToCart = {addToCartHandler}/>
    </div>
  );
};

export default Card;
