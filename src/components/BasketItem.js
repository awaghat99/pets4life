import React from "react";

const BasketItem = (props) => {
  return (
    <div className="Basket-item">
      <div className="Basket-image">
        <img src={props.basketItem.url} alt="cat" />
      </div>
      <div className="Basket-price-and-breed">
        <h3 className="£">£{props.catPrice}</h3>
        <h2 className="breed-name">{props.basketItem.breeds[0].name ? props.basketItem.breeds[0].name : "Cat Breed"}</h2>
        <button className="remove-btn"
          onClick={() => {
            props.handleRemoveFromBasket(props.basketItem, props.catPrice);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
