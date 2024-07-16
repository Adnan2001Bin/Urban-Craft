
import React, { useState, useEffect } from 'react'
import './ArtisticFurnitureComponent.css'

import img1 from '/public/assets/Artistic Furniture/Artistic_Large.jpg'
import img2 from '/public/assets/Artistic Furniture/Artistic_Large2.jpg'
import img3 from '/public/assets/Artistic Furniture/Artistic_Large3.jpg'

const ArtisticFurniture3 = () => {

    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = [img1, img2, img3];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000)
        return () => clearInterval(interval);
    }, [backgroundIndex])

    const prevBackground = () => {
        setBackgroundIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
    };

    const nextBackground = () => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    return (
        <div className="backgroundArtisticFurniture3 bg-yellow-500 flex justify-between items-center" style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
            <button onClick={prevBackground} className="ml-5 mt-16 arrow-buttonArtisticFurniture left flex pl-3 pt-1 w-14 h-14 font-semibold text-4xl rounded-full  ">&lt;</button>
            <button onClick={nextBackground} className="mr-5 mt-16 arrow-buttonArtisticFurniture right flex pl-4 pt-1 w-14 h-14 font-semibold text-4xl rounded-full">&gt;</button>

        </div>
    )
}

export default ArtisticFurniture3
