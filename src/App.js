import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Choose from "./components/choose/Choose";
import Products from "./components/products/Products";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <Products />
      <Featured />
      <Footer />
    </div>
  );
};

export default App;
