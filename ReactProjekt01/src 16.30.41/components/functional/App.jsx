// src/components/functional/App.jsx

import { useState } from "react";
import Navbar from "../Navbar";         // ggf. "../functional/Navbar"
import Products from "../functional/Products";     // korrekt importieren!
import ProductContext from "../../context/products";
const App = () => {
  
  const [products, setProducts] = useState([
    { id: 1, count: 3, productName: "laptop" },
    { id: 2, count: 4, productName: "phone" },
    { id: 3, count: 6, productName: "Airpods" },
  ]);

  const handleDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  const handleReset = () => {
    const resetProducts = products.map((p) => ({ ...p, count: 0 }));
    setProducts(resetProducts);
  };

  const handleIncrement = (productId) => {
    const newProducts = products.map((p) =>
      p.id === productId ? { ...p, count: p.count + 1 } : p
    );
    setProducts(newProducts);

  };

  const handleDecrement = (productId) => {
    const newProducts = products.map((p) =>
      p.id === productId ? { ...p, count: p.count - 1 } : p
    );
    setProducts(newProducts);
  };

  return (
    <>
    <ProductContext.Provider
    value={{
      products,
      onDelete: handleDelete,
      onIncriment: handleIncrement,
      onDecriment: handleDecrement,
      onReset: handleReset
    }}>
    <Navbar/>
    <Products/>
    </ProductContext.Provider>
    </>
  );
};

export default App;
