import React from "react";
import "../App.css";
import CatCardHolder from "../components/CatCardHolder";

const Home = (props) => {
  return (
    <div>
      <h1>Cats For Life</h1>
      <CatCardHolder catData={props.catData} />
    </div>
  );
};

export default Home;
