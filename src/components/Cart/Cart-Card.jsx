import React from 'react'

const Cart_Card = (props) => {
    const price = `৳${props.price}`;
    return (
        <li className="mb-4">
            <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
                <div className='w-1/4'>
                    <img className="w-full rounded-lg object-cover" src={props.img} alt={props.name} />
                </div>
                <div className="ml-6 flex flex-col justify-center w-3/4">
                    <h2 className="text-xl font-bold text-gray-800">{props.name}</h2>
                    <div className='text-lg font-semibold mt-2 flex items-center'>
                        <span className='text-teal-600'>{price}</span>
                        <span className='px-2 py-1 rounded-md border border-gray-300 ml-4 text-gray-600'>x {props.amount}</span>
                    </div>
                    <div className='mt-3 flex space-x-3'>
                        <button className="h-8 w-12 border border-teal-600 rounded-lg flex justify-center items-center text-teal-600 hover:bg-teal-600 hover:text-white transition duration-300" onClick={props.onRemove}>-</button>
                        <button className="h-8 w-12 border border-teal-600 rounded-lg flex justify-center items-center text-teal-600 hover:bg-teal-600 hover:text-white transition duration-300" onClick={props.onAdd}>+</button>

                        <button className='h-8 w-12' onClick={props.onAllRemove}><img src="public\assets\HeaderImage\Delete.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Cart_Card
