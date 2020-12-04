import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TrendingPosts from "../components/TrendingPosts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      <Footer />
    </>
  );
};

export default Home;
