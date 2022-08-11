import React from "react";
import "../Styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ image, title, price, rating, id, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">₹ {price}</p>
        <p className="checkoutProduct_rating">{rating}</p>
        {!hideButton && (
          <button className="checkoutProduct_button" onClick={removeFromBasket}>
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
