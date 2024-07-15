import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../Card'
import ProductCardLayout from '../ProductCardLayout'


const Wardrobe = () => {
    const [wardrobes, seWardrobes] = useState([])

    useEffect(() => {
        const fetchWardrobes = async () => {
            const response = await fetch(
                'https://urban-craft-d3a6d-default-rtdb.firebaseio.com/Wardrobes.json'
            );
            const responseData = await response.json();

            const loadWardrobes = [];

            for (const key in responseData) {
                loadWardrobes.push({
                    id: key,
                    img: responseData[key].img,
                    name: responseData[key].name,
                    price: responseData[key].price
                });


            };
            seWardrobes(loadWardrobes);

        }
        fetchWardrobes();
    }, [])


    const wardrobeList = wardrobes.map((wardrobe) =>
        <Card
            key={wardrobe.id}
            id={wardrobe.id}
            img={wardrobe.img}
            name = {wardrobe.name}
            price={wardrobe.price}
        />


    )


    return (
        <div>
            <div className='w-full flex justify-end items-center mt-5 mb-5'>
                <div className=' flex w-2/4 justify-between pr-5 items-center'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Wardrobe</h1>
                        <p className='font-extrabold text-gray-900 bg-zinc-950 w-14 h-1'></p>
                    </div>                 
                    <p className='hidden md:block md:text-lg'>Showing {wardrobeList.length} Products</p>
                </div>
            </div>
            <ProductCardLayout >
                {wardrobeList}
            </ProductCardLayout>
        </div>
    )
}


export default Wardrobe
