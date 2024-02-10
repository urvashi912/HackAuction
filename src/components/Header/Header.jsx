// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// eslint-disable-next-line no-unused-vars
import { Link, Outlet } from "react-router-dom";
import { useStateValue } from "../Datalayer/StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="Header">
      <Link to="/">
        <img
          className="header_logo"
          src=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" name="myInout" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="headerOptionLineOne">Hello guest</span>
          <span className="headerOptionLineTwo">Sign In</span>
        </div>
        {/* <div className="header_option">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& Orders</span>
        </div> */}
        {/* <div className="header_option">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div> */}

        <div className="header_optionBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon />
          </Link>
          <span className="header_optionLineTwo_Count">{basket?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
