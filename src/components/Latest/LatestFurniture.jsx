import './LatestFurniture.css'
import React, { useState, useEffect } from 'react';

const LatestFurniture = () => {
    const images = [
        'assets/Latest/01.jpg',
        'assets/Latest/02.jpg',
        'assets/Latest/03.jpg',
        'assets/Latest/04.jpg',
        'assets/Latest/05.jpg',
        'assets/Latest/06.jpg',
        'assets/Latest/07.1.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const displayedImages = [
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length],
    ];

    return (
        <div className='flex LatestFurniture mt-10 '>
            <div className=' w-2/6 ChoicesText'>
                <h1 className='text-7xl text-end mr-3'>Latest Fuirniture</h1>
                <p className='text-4xl font-normal mt-5 text-end mr-3'>Take a glance and grab ideas from the artistic frames of UURBAN CRAFT</p>
                <div className='flex justify-end mr-3'>
                    <button className='mt-10 w-40 h-11 bg-slate-50 text-lg border-solid border-2 border-amber-500 rounded-2xl font-medium'>Explore Now</button>
                </div>
            </div>
            <div className="relative flex items-center justify-center space-x-4 w-4/6">
                <button
                    className="absolute left-0 z-10 p-2 bg-gray-700 text-white rounded-full"
                    onClick={handlePrev}
                >
                    &lt;
                </button>
                {displayedImages.map((image, index) => (
                    <div key={index} className="relative w-1/3">
                        <img src={image} alt={`Slide ${index}`} className="w-full LatestFurnitureimg object-cover" />
                    </div>
                ))}
                <button
                    className="absolute right-0 z-10 p-2 bg-gray-700 text-white rounded-full"
                    onClick={handleNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default LatestFurniture
