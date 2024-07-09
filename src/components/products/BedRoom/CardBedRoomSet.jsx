// CardBedRoomSet.js
import React, { useContext } from 'react'
import '../Card.css'
import Form from '../others/Form';
import CartContext from '../../../Store/cart-context';
import Cookies from 'universal-cookie';

const CardBedRoomSet = ({ id, img,img1,img2,img3,img4, name, price, onSelectbedRoomSets }) => {
  const cookies = new Cookies();
  const cartCtx = useContext(CartContext);
  const displayPrice = `Starts From ${price} BDT`;

  cookies.set('cartItems', JSON.stringify(cartCtx.items), { path: '/' });

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      img: img,
      img1:img1,
      amount: amount,
      price: price
    });
  };

  return (
    <div className='productsimgLink shadow-lg' onClick={() => onSelectbedRoomSets({ id, img,img1, name, price })}>
      <div className='productsBox'>
        <img className='productsImg' src={img} alt={name} />
      </div>
      <div className='w-full relative left-32 top-2'>
        <div className='flex justify-between under'>
          <div>
            <h1 className='text-center text-xl font-sans font-semibold'>
              {name}
            </h1>
            <p className='text-center text-lg font-sans font-normal mt-2'>{displayPrice}</p>
          </div>
          <Form onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default CardBedRoomSet;
