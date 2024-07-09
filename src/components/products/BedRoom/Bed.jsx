import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../Card'
import ProductCardLayout from '../ProductCardLayout'

const Bed = (props) => {
    const [beds, setBeds] = useState([])

    useEffect(() => {
        const fetchBeds = async () => {
            const response = await fetch(
                'https://urban-craft-d3a6d-default-rtdb.firebaseio.com/Beds.json'
            );
            const responseData = await response.json();

            const loadBeds = [];

            for (const key in responseData) {
                loadBeds.push({
                    id: key,
                    img: responseData[key].img,
                    name: responseData[key].name,
                    price: responseData[key].price
                });


            };
            setBeds(loadBeds);

        }
        fetchBeds();
    }, [])

    const bedList = beds.map((bed) =>
        <Card
            key={bed.id}
            id={bed.id}
            img={bed.img}
            name = {bed.name}
            price={bed.price}
        />


    )


    return (
        <div>
            <div className='w-full flex justify-end items-center mt-5 mb-5'>
                <div className=' flex w-2/4 justify-between pr-5 items-center'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Bed</h1>
                        <p className='font-extrabold text-gray-900 bg-zinc-950 w-14 h-1'></p>
                    </div>                 
                    <p className='text-lg'>Showing {bedList.length} Products</p>
                </div>
            </div>
            <ProductCardLayout >
                {bedList}
            </ProductCardLayout>
        </div>
    )
}

export default Bed
