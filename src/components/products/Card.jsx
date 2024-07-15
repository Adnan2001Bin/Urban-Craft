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
   
    <div className=" sm:p-4 lg:w-11/12 sm:w-72 w-40 h-full  shadow-lg rounded-md overflow-hidden hover:border-2 hover:border-gray-300 ">
      <div className="w-full lg:h-80 h-48 overflow-hidden relative rounded-md ">
        <img
          className="transition-transform duration-700 transform hover:scale-110 w-full h-full object-cover"
          src={props.img}
          alt="Bedroom Set"
        />
      </div>
      <div className="sm:mb-5 mb-2">
        <h1 className="text-center sm:text-xl text-base text-slate-700 font-sans font-semibold">
          {props.name}
        </h1>
        <p className="text-center  mt-1 font-mono font-bold">{price}</p>
      </div>
      <Form onAddToCart = {addToCartHandler}/>
    </div>
  );
};

export default Card;
