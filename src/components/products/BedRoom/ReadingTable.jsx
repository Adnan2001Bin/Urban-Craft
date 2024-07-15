import React, { useEffect, useState } from 'react'
import Card from '../Card'
import ProductCardLayout from '../ProductCardLayout'

const ReadingTable = () => {
  const [readingTable, setReadingTables] = useState([])

  useEffect(() => {
      const fetchdata = async () => {
          const response = await fetch(
              'https://urban-craft-d3a6d-default-rtdb.firebaseio.com/ReadingTables.json'
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
          setReadingTables(load);

      }
      fetchdata();
  }, [])


  const readingTableList = readingTable.map((readingTable) =>
      <Card
          key={readingTable.id}
          id={readingTable.id}
          img={readingTable.img}
          name = {readingTable.name}
          price={readingTable.price}
      />


  )


  return (
      <div>
          <div className='w-full flex md:justify-end items-center mt-5 mb-5 justify-center'>
              <div className=' flex  w-2/4 justify-between pr-5 items-center'>
                  <div className=''>
                      <h1 className='lg:text-3xl text-xl font-semibold text-center'>Reading Table</h1>
                      <p className='font-extrabold text-gray-900 bg-zinc-950 w-14 h-1'></p>
                  </div>                 
                  <p className='hidden md:block md:text-lg'>Showing {readingTableList.length} Products</p>
              </div>
          </div>
          <ProductCardLayout >
              {readingTableList}
          </ProductCardLayout>
      </div>
  )
}

export default ReadingTable
