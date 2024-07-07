import React, { Fragment } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/Route/Root'
import All from './All'
import BedRoomCatagoriesPage from './components/Layout/ProductCatagories/Beedroom/BedRoomCatagoriesPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true , element: <All />
        },
        {
          path:'/BedRoomCatagoriesPage' ,element:<BedRoomCatagoriesPage />
        }
      ]
    }
  ])
  return (
    <Fragment>
      <RouterProvider router={router}/>
    </Fragment>
  )
}

export default App
