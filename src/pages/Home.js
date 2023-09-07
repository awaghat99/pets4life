import React from "react";
import "../App.css";
import CatCardHolder from "../components/CatCardHolder";
import Basket from "../components/Basket";

const Home = (props) => {
  return (
    <div className="main">
      <div className="cat-grid">
      <CatCardHolder catData={props.catData} />
      </div>
      <div>
      <Basket/>
      </div>
    </div>
  );
};

export default Home;
