import React from "react";
import "../App.css";
import CatCardHolder from "../components/CatCardHolder";
import Basket from "../components/Basket";

const Home = (props) => {
  return (
    <div className="main">
      <div className="aside-from-basket">
        <div className="Grid-Top"/>
        
        <CatCardHolder catData={props.catData} handleAddToCart={props.handleAddToCart} />
      </div>
      <div className="full-basket">
        {props.isBasketOpen ? (
          <Basket
            basketData={props.basketData}
            handleRemoveFromBasket={props.handleRemoveFromBasket}
            closeBasket={props.closeBasket}
            catPrice={props.catPrice}
            catPricesTotal={props.catPricesTotal}
          />
        ) : (
          <button className="Open-Bask-Btn basket-open-button" onClick={props.openBasket}>Open Your Basket</button>
        )}
      </div>
    </div>
  );
};

export default Home;
