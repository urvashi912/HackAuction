// eslint-disable-next-line no-unused-vars
import React, { useReducer } from "react";
import "./products.css";
import { useStateValue } from "../Datalayer/StateProvider";
import reducer, { initialState } from "../Datalayer/Reducer";
// import styles from "./index.css"


// eslint-disable-next-line react/prop-types
const Product = ({id, title, image, price, rating, Address, hotel_name }) => {

  // const [{basket}, dispatch] = useStateValue();
  // console.log('This is the beasket>>>', basket)

  const [{basket}, dispatch] = useStateValue();
  console.log('This is the basket>>>', basket)

  const addToBasket = ()=>{
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        Address:Address,
        hotel_name: hotel_name

      }
    })

  }
  return (
    <div className="product">
      <div className="product_info">
        <p className="hotel_name" style={{fontSize:"23px", marginBottom:"25px", fontWeight:"600"}}>{hotel_name}</p>
        <p><span className="surplus_food">Surplus Food:- </span>{title}</p>
        <p className="product_price">
          <strong><span>Price: </span>₹{price}</strong>
        </p>
        <div className="product_rating">
          {/* {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line react/jsx-key
              <p>⭐️</p>
            ))} */}
            <p><span className="address">Address: </span>{Address}</p>
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket} className=""> Add to HungerHalt Basket</button>
    </div>
  );
};

export default Product;
