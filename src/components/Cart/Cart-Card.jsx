import React from "react";

const Cart_Card = (props) => {
  const price = `৳${props.price}`;
  return (
    <li className="mb-4">
      <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
        <div className="w-1/3">
          <img
            className="w-full rounded-lg object-cover"
            src={props.img}
            alt={props.name}
          />
        </div>
        <div className="ml-6 font-bold font-MyFont1 w-3/4">
          <h2 className="text-lg text-gray-600">{props.name}</h2>
          <div className="text-base font-semibold mt-2 flex items-center  justify-between ">
            <div className="flex items-center">
              <p className="text-gray-800 ">{price}</p>
              <p className="px-2 py-1 rounded-md border border-gray-300 ml-4 text-gray-600">
                x {props.amount}
              </p>
            </div>
            <button className=" w-8" onClick={props.onAllRemove}>
              <img src="public\assets\HeaderImage\Delete.png" alt="" />
            </button>
          </div>
          <div className="mt-3 flex space-x-3 rounded-2xl bg-gray-300 justify-between w-24">
            <div
              className="  text-black hover:bg-gray-200 rounded-l-2xl px-3 py-1"
              onClick={props.onRemove}
            >
              -
            </div>
            <div
              className="  text-black hover:bg-gray-200 rounded-r-2xl px-3 py-1"
              onClick={props.onAdd}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cart_Card;
// border border-teal-600 rounded-lg flex justify-center items-center text-teal-600 hover:bg-teal-600 hover:text-white transition duration-300
