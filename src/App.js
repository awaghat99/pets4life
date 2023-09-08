import "../src/App.css";
import "../src/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Navbar from "./components/NavBar";
import Landing from "./pages/Landing";
import { useState, useEffect } from "react";

const App = () => {
  const [catData, setCatData] = useState();
  const [basketData, setBasketData] = useState([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [catPriceArray, setCatPriceArray] = useState([]);
  const [catPricesTotal, setCatPricesTotal] = useState(0);

  const handleAddToCart = (item, price) => {
    setBasketData([...basketData, item]);
    setCatPriceArray([...catPriceArray, price]);
    let totalCatPrice = catPricesTotal;
    totalCatPrice += price;
    setCatPricesTotal(totalCatPrice);
  };

  const handleRemoveFromBasket = (item, price) => {
    const updatedBasket = basketData.filter((i) => {
      return i.id !== item.id;
    });
    setBasketData(updatedBasket);
    const updatedPriceArray = catPriceArray.filter((itemPrice) => {
      return itemPrice !== price;
    });
    setCatPriceArray(updatedPriceArray);
    let totalCatPrice = catPricesTotal;
    totalCatPrice -= price;
    setCatPricesTotal(totalCatPrice);
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
                catPrice={catPriceArray}
                basketData={basketData}
                handleAddToCart={handleAddToCart}
                handleRemoveFromBasket={handleRemoveFromBasket}
                openBasket={openBasket}
                closeBasket={closeBasket}
                isBasketOpen={isBasketOpen}
                catPricesTotal={catPricesTotal}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Checkout" element={<Checkout catPricesTotal={catPricesTotal} />} />
          <Route path="/pets4life" element={<Landing />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
