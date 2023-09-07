import React from "react";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  return (
    <div className="basket-container">
      <button className="close-basket">X</button>
      <h2> Your Basket</h2>
      {[
        props.basketData.length > 0
          ? props.basketData.map((basketItem, index) => {
              return <BasketItem basketItem={basketItem} key={index} />;
            })
          : "Your basket is empty",
      ]}
    </div>
  );
};

export default Basket;
