import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import MyServices from "./Components/MyServices/MyServices";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
   <div>
      <Navbar/>
    <Hero/>
    <MyServices/>
    <ImageSlider/>
    <ContactSection/>
    <Footer/>
    </div>
 
  );
}

export default App;
