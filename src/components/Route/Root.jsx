import { Outlet } from 'react-router-dom'

import Home from '../../Home'
import { Fragment } from 'react'
// import CartProvider from '../../Store/CartProvider'




function RootLayout() {
  return (
    // <CartProvider>
    <Fragment>
      <Home />
      
      <div>
        <Outlet />
      </div>
      

      {/* <Footer /> */}
      </Fragment>
    // </CartProvider>
  )
}

export default RootLayout
