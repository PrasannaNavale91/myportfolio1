import React , { useEffect } from 'react';
import { Route , Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Preloader from './components/Preloader';
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import AnimCursor from './components/AnimCursor';

const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Preloader />
      <AnimCursor/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/work" element={<Work/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;