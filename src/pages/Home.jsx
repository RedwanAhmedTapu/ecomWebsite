import React from "react";
import FeatureProduct from "../components/FeatureProduct";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";

const Home = () => {
  const data = {
    name: "China Shop",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />

      {/* <Slider/> */}
    </>
  );
};

export default Home;
