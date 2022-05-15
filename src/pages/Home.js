import React from "react";
import Navbar from "../components/Navbar";
import MainSlider from "../components/MainSlider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <MainSlider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
