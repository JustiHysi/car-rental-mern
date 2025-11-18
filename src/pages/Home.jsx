import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner"
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection/>
      <Banner />
      <Testimonial />
      <Newsletter />
      <Button theme="primary"/>
      
      
      
    </>
  );
};

export default Home;
