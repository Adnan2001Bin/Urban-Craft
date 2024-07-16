import React from 'react'
import './ArtisticFurniture.css'
import ArtisticFurniture1 from './ArtisticFurniture1'
import ArtisticFurniture2 from './ArtisticFurniture2'
import ArtisticFurniture3 from './ArtisticFurniture3'
import { Link } from 'react-router-dom'

const ArtisticFurniture = () => {
    return (
        <div className='mt-8'>
        <h1 className='ml-5 text-3xl'> Artistic Furniture</h1>
            <div className='lg:flex sm:w-full w-full'>

                <div className='w-1/2 lg:flex lg:flex-col mr-3'>
                    <Link><ArtisticFurniture1 /></Link>
                    <Link className='mt-3'><ArtisticFurniture2 /></Link>

                </div>
                <div className='ArtisticFurniture1'>
                    <Link><ArtisticFurniture3 /></Link>
                </div>
            </div>
        </div>
    )
}

export default ArtisticFurniture
