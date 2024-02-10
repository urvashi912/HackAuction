/* eslint-disable no-unused-vars */
import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from '../Datalayer/StateProvider'

const CheckOutProduct = ({id, title, image, price, rating  }) => {

  const [{basket}, dispatch] = useStateValue()

  const removeFromBasket = ()=>{
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
    <>
    <div className='CheckOutProduct'>
        <div className='product_info'>
                <p>{title}</p>
                <div className='price'></div>
                <smal>$</smal>
          <strong>{price}</strong>
          {console.log(price)}
          <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line react/jsx-key
              <p>⭐️</p>
            ))}
        </div>
        </div>
        <img src={image} alt="" className='img'/>
        
    </div>
    <button className='btn' onClick={removeFromBasket}>Remove from basket</button>
    
    </>
    
  )
}

export default CheckOutProduct