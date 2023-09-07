import React from "react";
import "../App.css";

const CatCard = (props) => {
  return (
    <div className="one-cat">
      <div className="image">
        <img src={props.cat.url} alt="cat" />
      </div>
      <div>
        <h2>{props.cat.breeds[0].name ? props.cat.breeds[0].name : "Cat"}</h2>
        <h3>Price: £{props.price}</h3>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default CatCard;
