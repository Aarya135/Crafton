import React from "react";
import "../Styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import ad from "../images/ad.png";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal.js";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src={ad} alt="" className="checkout_ad" />
        <div>
          <h3 className="checkout_hello"> Hello {user?.email}, </h3>
          <h2 className="checkout_title">Your shopping cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
