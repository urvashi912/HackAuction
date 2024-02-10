/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./subtotal.css";
// import CurrencyInput from 'react-currency-input-field';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Datalayer/StateProvider";
import { getBasketTotal } from "../Datalayer/Reducer";
import Contact from "../Contact/Contact";
import { Outlet, Link } from "react-router-dom";

const SubTotal = ({price}) => {
  const [{ basket }, dispatch] = useStateValue();

  const handleClick=()=>{
    window.location.href = "/contact";
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        // eslint-disable-next-line no-unused-vars
        renderText={(value) => (
          <>
            <p>
              SubTotal of {basket.length == 0 ? " " : basket.length} items :{" "}
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalsLimit={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />

      <button>
        <text className="btn_txt" onClick={handleClick}>Proceed to Checkout</text>
      </button>
    </div>
  );
};

export default SubTotal;
