import React from "react";
import { useState, useEffect } from "react";
import CatCard from "../components/CatCard";

const CatCardHolder = () => {
  const [catData, setCatData] = useState([]);
  const createRandomPrice = () => {
    return Math.floor(Math.random() * 250);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=99&api_key=live_a49d14G4QIFGKTDT4vMm7ZlGDTCMhjTTcluXKodeyxclY7XubXPGvHa55wY6eNIf`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setCatData(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="all-cats">
        {[
          catData.length > 0
            ? catData.map((cat, index) => {
                return <CatCard key={index} cat={cat} price={createRandomPrice()} />;
              })
            : "Loading Cat Data",
        ]}
      </div>
    </div>
  );
};

export default CatCardHolder;
