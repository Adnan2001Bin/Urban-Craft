import React from 'react'
import ModalBedroomSet from './ModalBedroomSet'

const BedroomSetItems = ({hideset,bedroomset}) => {
  return (
    <ModalBedroomSet hideset= {hideset}>
      <h1>{bedroomset.name}</h1>
      <img className='w-40' src={bedroomset.img} alt="" />
      <img src={bedroomset.img1} alt="" />
      <img src={bedroomset.img1} alt="" />
      <img src={bedroomset.img1} alt="" />
      <img src={bedroomset.img1} alt="" />
    </ModalBedroomSet>
  )
}

export default BedroomSetItems
