// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import Product from "../Products/Product";
import { Style } from "@mui/icons-material";
// import {homeImage} from "../public/image/homeImage.png"

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
       
        <img
          className="home_image"
          src="public/image/homeImage.png"
          alt=""
        />


        <div className="home_row">
          <Product
          hotel_name="Rangrezza"
            title="Rice, Dal, Aloo Sabzi, Salads "
            price={30}
            image={
              "https://media-cdn.tripadvisor.com/media/photo-s/06/04/3d/e2/shaam-e-sarhad-village.jpg "
            }
            rating={3}
            Address="Plot No. 35 Kyampur, Sigma II, Greater Noida, Uttar Pradesh 201308•099530 80566"
          />
          <Product 
          hotel_name="Cinnamon"
          title="Raita, Daliya, Aloo Sabzi, Papad"
          price = {40}
          image={"https://www.funfoodfrolic.com/wp-content/uploads/2019/08/6.jpg"}
          rating={5}
          Address="Plot No. 35 Kyampur, Sigma II, Greater Noida, Uttar Pradesh 201308•099530 80566"
          
          />
        </div>

        <div className="home_row">
          <Product 
          hotel_name="Raja Dhaba"
          title = "Roti, Pulao, Dal, Salads"
          price = {26}
          image = {"https://www.funfoodfrolic.com/wp-content/uploads/2016/07/Meal-25.jpg"}
          rating = {5}
          Address="Plot No. 35 Kyampur, Sigma II, Greater Noida, Uttar Pradesh 201308•099530 80566"
           />
          <Product 
          hotel_name="UP-53"
          title = "Rice, Manchurian, Noodles, Salads"
          price = {20}
          image = {
            "https://foodoncall.co.in/wp-content/uploads/2017/12/chinese-thali-1.jpg"
          }
          rating={4}
          Address="Plot No. 35 Kyampur, Sigma II, Greater Noida"
          />
          <Product
          hotel_name="Punjabi Dhaba"
          title = "Rice, Paneer chilli, Manchurain"
          price = {370.99}
          image = {"https://masalamagic.files.wordpress.com/2014/07/dsc_0096.jpg"}
          rating= {4}
          Address="Plot No. 35 Kyampur, Sigma II, Greater Noida"

          />
        </div>

        <div className="home_row">
          <Product
          hotel_name="UBQ"
          title = "Handi paneer, Rice, Roti, Fried Rice, Noodles"
          image = {"https://media-cdn.tripadvisor.com/media/photo-s/18/19/f0/a6/simple-but-tasty-thali.jpg"}
          rating = {5}
          Address="Plot No. 35 Kyampur, Sigma II, Greater Noida, Uttar Pradesh 201308•099530 80566"
          price = {50.99}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
};

export default Home;
