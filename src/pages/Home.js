import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [catData, setCatData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_a49d14G4QIFGKTDT4vMm7ZlGDTCMhjTTcluXKodeyxclY7XubXPGvHa55wY6eNIf`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setCatData(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {[
        catData
          ? catData.map((cat, index) => {
              return <img key={index} src={cat.url} alt={`cat-${index}`} />;
            })
          : "Loading Cat Data",
      ]}
    </div>
  );
};

export default Home;
