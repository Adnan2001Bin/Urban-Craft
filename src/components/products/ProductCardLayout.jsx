import React from 'react'

const ProductCardLayout = (props) => {
  return (
    <div className='grid grid-cols-3 gap-y-5 pl-4'>
      {props.children}
    </div>
  )
}

export default ProductCardLayout
