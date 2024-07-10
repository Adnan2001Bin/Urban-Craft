import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import ResponsiveNavbar from "./components/Layout/ResponsiveNavbar";
import Cart from "./components/Cart/Cart";

const Home = () => {
  const [navShown, setnavShown] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showNavHandler = () => {
    setnavShown(true);
  };

  const hideNavHandler = () => {
    setnavShown(false);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header 
      onShowNav={showNavHandler} 
      onShowCart={showCartHandler}

      />

      {navShown && <ResponsiveNavbar onClose={hideNavHandler} />}
    </Fragment>
  );
};

export default Home;
