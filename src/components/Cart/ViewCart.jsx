import React, { useContext } from "react";
import Cart_Card from "./Cart-Card";
import CartContext from "../../Store/cart-context";
import ViewCartCard from "./ViewCart-Card";
import "./ViewCartCard.css";

const ViewCart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `৳${cartCtx.totalAmount}`;
  const hasItems = 0;

  const cartAllItemRemoveHandler = (id) => {
    cartCtx.removeAllItem(id);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const handleClick = () => {
    props.onShowCheckOut();
    props.onClose();
  };

  const cartItems = (
    <ul className=" bg-white">
      {cartCtx.items.map((item) => (
        <ViewCartCard
          key={item.id}
          name={item.name}
          img={item.img}
          amount={item.amount}
          price={item.price}
          onAllRemove={cartAllItemRemoveHandler.bind(null, item.id)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalItems = cartCtx.items.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <div className="flex  w-full">
      <div className="w-3/4">{cartItems}</div>
      <div className="w-80 fixed summury top-1/4 h-96 border">
        <div className="flex items-center font-medium h-12 ml-3 mt-3 bg-gray-300 w-11/12 text-2xl font-MyFont1 rounded-sm pl-1">
          <h1>Order Summary</h1>
        </div>

        <div className="flex justify-between ml-3 mt-10 b w-11/12 text-xl font-MyFont1 pl-1 pb-2 border-b-2">
          <p>Total Quantity</p>
          <div className="bg-gray-100 w-10 flex justify-center border-2 border-gray-300">
            <p>x {totalItems}</p>
          </div>
        </div>

        <div className="flex justify-between ml-3 mt-10 b w-11/12 text-xl font-MyFont1 font-medium pl-1 pb-2 border-b-2">
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>


        <div className="w-full flex justify-center">
        <button
          className={`w-72 text-white font-MyFont1 text-lg font-medium bg-orange-400 border border-black hover:bg-orange-500 h-10 text-center mt-16 rounded-xl `}
        >
          CHECKOUT
        </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default ViewCart;
