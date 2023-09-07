import React from "react";
import "../App.css";
import CatCardHolder from "../components/CatCardHolder";
import Basket from "../components/Basket";

const Home = (props) => {
  return (
    <div className="main">
      <div className="aside-from-basket">
        <h1>Cats For Life</h1>
        <CatCardHolder catData={props.catData} />
      </div>
      <div className="full-basket">
        <Basket />
      </div>
    </div>
  );
};

export default Home;
