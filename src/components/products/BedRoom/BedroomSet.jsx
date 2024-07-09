// BedroomSet.js
import React, { useEffect, useState } from 'react';
import ProductCardLayout from '../ProductCardLayout';
import CardBedRoomSet from './CardBedRoomSet';
import BedroomSetItems from './BedroomSetItems';

const BedroomSet = () => {
    const [bedRoomSets, setBedRoomSets] = useState([]);
    const [bedroomSetItemsShown, setBedroomSetItemsShown] = useState(false);
    const [selectbedRoomSets, setSelectbedRoomSets] = useState(null);

    const showBedroomSetItemsHandler = () => {
        setBedroomSetItemsShown(true);
    };

    const hideBedroomSetItemsHandler = () => {
        setBedroomSetItemsShown(false);
    };

    useEffect(() => {
        const fetchBedRoomSets = async () => {
            const response = await fetch(
                'https://urban-craft-d3a6d-default-rtdb.firebaseio.com/BedRoomSets.json'
            );
            const responseData = await response.json();

            const loadBedRoomSets = [];

            for (const key in responseData) {
                loadBedRoomSets.push({
                    id: key,
                    img: responseData[key].img,
                    img1: responseData[key].img1,
                    img2: responseData[key].img2,
                    img3: responseData[key].img3,
                    img4: responseData[key].img4,
                    name: responseData[key].name,
                    nameimg1: responseData[key].nameimg1,
                    nameimg2: responseData[key].nameimg2,
                    nameimg3: responseData[key].nameimg3,
                    nameimg4: responseData[key].nameimg3,
                    price: responseData[key].price,
                    priceimg1: responseData[key].priceimg1,
                    priceimg2: responseData[key].priceimg2,
                    priceimg3: responseData[key].priceimg3,
                    priceimg4: responseData[key].priceimg4,
                });
            }
            setBedRoomSets(loadBedRoomSets);
        };
        fetchBedRoomSets();
    }, []);

    const onSelectbedRoomSets = set => {
        console.log(set)
        setSelectbedRoomSets(set);
    };

    const bedRoomSetsList = bedRoomSets.map((set) => (
        <CardBedRoomSet
            key={set.id}
            id={set.id}
            img={set.img}
            img1={set.img1}
            img2={set.img2}
            img3={set.img3}
            img4={set.img4}
            name={set.name}
            nameimg1 = {set.nameimg1}
            nameimg2 = {set.nameimg2}
            nameimg3 = {set.nameimg3}
            nameimg4 = {set.nameimg4}
            price={set.price}
            priceimg1 = {set.priceimg1}
            priceimg2 = {set.priceimg2}
            priceimg3 = {set.priceimg3}
            priceimg4 = {set.priceimg4}
            onSelectbedRoomSets={onSelectbedRoomSets}
        />
    ));

    return (
        <div>
            <div className='w-full flex justify-end items-center mt-5 mb-5'>
                <div className='flex w-2/4 justify-between pr-5 items-center'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Bed</h1>
                        <p className='font-extrabold text-gray-900 bg-zinc-950 w-14 h-1'></p>
                    </div>
                    <p className='text-lg'>Showing {bedRoomSetsList.length} Products</p>
                </div>
            </div>
            <ProductCardLayout>
                <div onClick={showBedroomSetItemsHandler}>
                    {bedRoomSetsList}
                </div>
            </ProductCardLayout>

            {bedroomSetItemsShown && <BedroomSetItems bedroomset={selectbedRoomSets} hideset={hideBedroomSetItemsHandler} />}
        </div>
    );
};

export default BedroomSet;
