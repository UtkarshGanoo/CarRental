import React, { useState } from "react";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import FeatureSection from "../components/FeatureSection";
import Banner from "../components/Banner";
import Testinomials from "../components/Testinomials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  const [car, setCar] = useState(null);
  return (
    <div>
      <Hero />
      <FeatureSection />
      <Banner />
      {/* <Testinomials /> */}
      <Newsletter />
    </div>
  );
};

export default Home;
