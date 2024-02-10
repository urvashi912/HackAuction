/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./subtotal.css";
// import CurrencyInput from 'react-currency-input-field';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Datalayer/StateProvider";
import { getBasketTotal } from "../Datalayer/Reducer";

const SubTotal = ({price}) => {
  const [{ basket }, dispatch] = useStateValue();
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
            <small className="subtotal_gift">
              <input type="checkbox" className="checkbox" />
              This order contains a gifit
            </small>
          </>
        )}
        decimalsLimit={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>
        <text className="btn_txt">Proceed to Checkout</text>
      </button>
    </div>
  );
};

export default SubTotal;
