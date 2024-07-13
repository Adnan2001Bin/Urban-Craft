import React from "react";

const ViewCartCard = (props) => {
  const price = `৳${props.price}`;
  return (
    <div className="w-full h-40 flex justify-between p-4 items-center shadow-md mb-2 rounded-lg bg-red-600">
      <div className="w-56 h-36 ">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className="ml-6 w-3/4 flex items-center justify-between font-bold border-2 border-gray-300 font-MyFont1 ">
        <div className="w-64 h-full border-r-2 pl-2">
        <h2 className="text-lg text-gray-600 align-middle">{props.name}</h2>
        </div>
        <div className="text-base w-40 font-semibold flex items-center justify-between">
          <div className="flex items-center justify-between w-36">
            <p className="text-gray-800 ">{price}</p>
            <p className="px-2 rounded-md border border-gray-300 text-gray-600">
              x {props.amount}
            </p>
          </div>
        </div>
        <div className="flex justify-between w-40">
          <div className=" flex space-x-3 rounded-2xl bg-gray-300 justify-between w-24">
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

          <button className=" w-6" onClick={props.onAllRemove} >
            <img src="public\assets\HeaderImage\Delete.png" alt="" />
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCartCard;
// border border-teal-600 rounded-lg flex justify-center items-center text-teal-600 hover:bg-teal-600 hover:text-white transition duration-300
