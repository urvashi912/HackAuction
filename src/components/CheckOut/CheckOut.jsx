/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./checkout.css"
import SubTotal from './SubTotal'
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from '../Datalayer/StateProvider'

const CheckOut = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <h2 className='checkout_title'>NourishCart</h2>
          <hr style={{color:"lightgray"}}/>

          {basket.map(item=>(
            // eslint-disable-next-line react/jsx-key
            <CheckOutProduct
            id={item.id}
            title={item.title}
            image = {item.image}
            price = {item.price}
            rating = {item.rating}
            
            />
          ))}
          
          {/* Basket  */}
          {/* Basket  */}
          {/* Basket  */}
          {/* Basket  */}
          {/* Basket  */}
          {/* Basket  */}

      </div>

      <div className='checkout_right'>
        <SubTotal/>
        {/* <h3 className='total'>Subtotal(1 item): $333</h3> */}
      </div>
    </div>
  )
}

export default CheckOut