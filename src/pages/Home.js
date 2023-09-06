import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [catData, setCatData] = useState();

  const apiKey = "live_a49d14G4QIFGKTDT4vMm7ZlGDTCMhjTTcluXKodeyxclY7XubXPGvHa55wY6eNIf";
  const url = `https://api.thecatapi.com/v1/images/search?limit=100?api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return <div>Home</div>;
};

export default Home;
