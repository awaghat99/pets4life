import "../src/App.css";
import "../src/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout"
import Navbar from "./components/NavBar";
import { useState, useEffect } from "react";

const App = () => {
  const [catData, setCatData] = useState();
  const [basketData, setBasketData] = useState([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const handleAddToCart = (item) => {
    setBasketData([...basketData, item]);
  };

  const handleRemoveFromBasket = (item) => {
    const updatedBasket = basketData.filter((i) => {
      return i.id !== item.id;
    });
    setBasketData(updatedBasket);
  };

  const openBasket = () => {
    setIsBasketOpen(true);
  };

  const closeBasket = () => {
    setIsBasketOpen(false);
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
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/Home"
            element={
              <Home
                catData={catData}
                basketData={basketData}
                handleAddToCart={handleAddToCart}
                handleRemoveFromBasket={handleRemoveFromBasket}
                openBasket={openBasket}
                closeBasket={closeBasket}
                isBasketOpen={isBasketOpen}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
