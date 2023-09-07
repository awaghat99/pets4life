import React from "react";
import CatCardHolder from "../components/CatCardHolder";
import Basket from "../components/Basket";

const Home = (props) => {
  return (
    <div className="main">
      <div className="aside-from-basket">
        <h1>Cats For Life</h1>
        <CatCardHolder catData={props.catData} handleAddToCart={props.handleAddToCart} />
      </div>
      <div className="full-basket">
        {props.isBasketOpen ? (
          <Basket basketData={props.basketData} handleRemoveFromBasket={props.handleRemoveFromBasket} closeBasket={props.closeBasket} />
        ) : (
          <button onClick={props.openBasket}>Open Your Basket</button>
        )}
      </div>
    </div>
  );
};

export default Home;
