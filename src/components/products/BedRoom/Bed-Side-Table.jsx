import React, { useEffect, useState } from 'react'
import Card from '../Card'
import ProductCardLayout from '../ProductCardLayout'

const BedSideTable = () => {
  const [bedSideTables, setBedSideTables] = useState([])

  useEffect(() => {
      const fetchdata = async () => {
          const response = await fetch(
              'https://urban-craft-d3a6d-default-rtdb.firebaseio.com/BedSideTables.json'
          );
          const responseData = await response.json();

          const load = [];

          for (const key in responseData) {
            load.push({
                  id: key,
                  img: responseData[key].img,
                  name: responseData[key].name,
                  price: responseData[key].price
              });


          };
          setBedSideTables(load);

      }
      fetchdata();
  }, [])


  const bedSideTableList = bedSideTables.map((bedSideTable) =>
      <Card
          key={bedSideTable.id}
          id={bedSideTable.id}
          img={bedSideTable.img}
          name = {bedSideTable.name}
          price={bedSideTable.price}
      />


  )


  return (
      <div>
          <div className='w-full flex justify-end items-center mt-5 mb-5'>
              <div className=' flex w-2/4 justify-between pr-5 items-center'>
                  <div>
                      <h1 className='text-3xl font-semibold'>Bed-Side-Table</h1>
                      <p className='font-extrabold text-gray-900 bg-zinc-950 w-14 h-1'></p>
                  </div>                 
                  <p className='text-lg'>Showing {bedSideTableList.length} Products</p>
              </div>
          </div>
          <ProductCardLayout >
              {bedSideTableList}
          </ProductCardLayout>
      </div>
  )
}

export default BedSideTable
