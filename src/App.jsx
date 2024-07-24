import { useEffect } from "react";
import Empowering from "./components/Empowering";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introducing from "./components/Introducing";
import Opportunities from "./components/Opportunities";
import TrustedBy from "./components/TrustedBy";

export default function App() {
  
  return (
    <div className="text-white">
      <Header data-aos="fade-right"/>
      <Hero/>
      <TrustedBy/>
      <Introducing/>
      <Opportunities/>
      <Empowering/>
      <Footer/>
    </div>
  )
}