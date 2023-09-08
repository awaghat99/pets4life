import React from "react";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  return (
    <div className="basket-container">
      <button
        className="close-basket"
        onClick={() => {
          props.closeBasket();
        }}
      >
        X
      </button>
      <h2> Your Basket</h2>
      {[
        props.basketData.length > 0
          ? props.basketData.map((basketItem, index) => {
              return (
                <BasketItem
                  basketItem={basketItem}
                  key={index}
                  handleRemoveFromBasket={props.handleRemoveFromBasket}
                  catPrice={props.catPrice[index]}
                />
              );
            })
          : "Your basket is empty",
      ]}
      <h2>Your Total is: £{props.catPricesTotal}</h2>
    </div>
  );
};

export default Basket;
