import React, { useEffect } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Information from "../components/Information";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import CopyRight from "../components/CopyRight";
import Slider from "../components/Slider";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Information />
      <NavBar />
      <Slider />
      <Categories />
      <NewsLetter />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default HomePage;
