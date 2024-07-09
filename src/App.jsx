import React, { Fragment } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/Route/Root'
import All from './All'
import BedRoomCatagoriesPage from './components/Layout/ProductCatagories/Beedroom/BedRoomCatagoriesPage'
import DinningRoomCatagoriesPage from './components/Layout/ProductCatagories/Dinning/DinningRoomCatagoriesPage'
import LivingRoomCatagoriesPage from './components/Layout/ProductCatagories/LivingRoom/LivingRoomCatagoriesPage'
import OfficeCatagoriesPage from './components/Layout/ProductCatagories/OfficeRoom/OfficeCatagoriesPage'
import DoorCatagoriesPage from './components/Layout/ProductCatagories/Door/DoorCatagoriesPage'
import Bed from './components/products/BedRoom/Bed'
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
        },
        {
          path:'/DinningRoomCatagoriesPage' , element: <DinningRoomCatagoriesPage />
        },
        {
          path: '/LivingRoomCatagoriesPage' , element:<LivingRoomCatagoriesPage />
        },
        {
          path: '/OfficeCatagoriesPage' , element: <OfficeCatagoriesPage />
        },
        {
          path: '/DoorCatagoriesPage' , element: <DoorCatagoriesPage />
        },
        {
          path: '/Bed' , element: <Bed />
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
