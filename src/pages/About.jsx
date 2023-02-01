import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import { useProductContext } from "../context/ProductContext";

const About = () => {
  // const myName = useContext(AppContext);
  const { myName } = useProductContext();

  const data = {
    name: "Shop Hunt",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default About;
