import React from "react";
import "../Styles/Header.css";
import logo from "../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo}></img>
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_optionL1">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionL2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionL1">Return</span>
          <span className="header_optionL2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionL1">Your</span>
          <span className="header_optionL2">Prime</span>
        </div>
        <Link className="basket_link" to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_optionL2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
