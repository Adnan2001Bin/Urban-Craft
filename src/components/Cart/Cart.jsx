import "./Cart.css";
import ModalCart from "./ModalCart";
import { Link } from "react-router-dom";
import CartContext from "../../Store/cart-context";
import { useContext } from "react";
import Cart_Card from "./Cart-Card";
import ViewCart from "./ViewCart";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `৳${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

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
    <ul className="cart-items bg-white">
      {cartCtx.items.map((item) => (
        <Cart_Card
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

  return (
    <ModalCart onClose={props.onClose}>
      <div className="Cart">
        <div className="mt-5 text-xl font-bold">
          <h1>Your Cart</h1>
        </div>

        {/* {hasItems && <div>{cartItems}</div>
        
        } */}

        {hasItems && (
          <div>
            <div>{cartItems}</div>
            <div className=" w-full bg-gray-100 font-MyFont1">
              <div className="flex items-center justify-between font-semibold text-xl mb-2 ">
                <p>Total Amount:</p>
                <p className="  pl-4">{totalAmount}</p>
              </div>

              <div className="flex justify-between">
              <Link onClick={props.onClose} to={'/ViewCart'}>
                <button
                  onClick={handleClick}
                  className={`w-48 text-white bg-gray-800 border border-black hover:bg-gray-600  h-10 text-center`}
                >
                  VIEW CART
                </button>
                </Link>

                <button
                  onClick={handleClick}
                  className={`w-48 text-white bg-black border border-black hover:bg-gray-600 h-10 text-center`}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}

        {!hasItems && (
          <div className="emptyCart">
            <img className="w-4/5" src="assets\Untitled design.png" alt="" />
            <h1 className="text-xl font-bold">Your Cart is feeling lonely</h1>

            <Link to="/">
              <button
                onClick={props.onClose}
                className="bg-black text-white w-40 h-10 rounded-xl mt-5"
              >
                Start Shopping
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* {hasItems && (
        
      )} */}
    </ModalCart>
  );
}



export default Cart;
