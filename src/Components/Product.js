import { useSlotProps } from "@mui/base";
import React from "react";
import "../Styles/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  // console.log(basket);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key: id,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          {/* <small> </small> */}
          <strong>₹{price}</strong>
        </p>
        <div className="product_rating">
          <p>{rating}</p>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
