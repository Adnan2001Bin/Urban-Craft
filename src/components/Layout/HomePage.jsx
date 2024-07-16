import React, { useState, useEffect } from 'react'
import './HomePage.css'

import img1 from '/public/assets/HomePageImg/Img1.jpg'
import img2 from '/public/assets/HomePageImg/Img2.jpg'
import img3 from '/public/assets/HomePageImg/Img3.jpg'




function HomePage() {
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
        <div className="background flex justify-between items-center" style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
            <button onClick={prevBackground} className="ml-5 arrow-button left flex w-14 h-14 font-semibold text-4xl rounded-full  hover:bg-gray-800">&lt;</button>
            <button onClick={nextBackground} className="mr-5 arrow-button right flex w-14 h-14 font-semibold text-4xl rounded-full  hover:bg-gray-800">&gt;</button>

        </div>

        
    )
}

export default HomePage
