import React from "react";
import Navbar from "../Components/Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Drinks from "./Drinks";
import Main_Course from "./Main_course";
import Starter from "./Starter";
import Desserts from "./Desserts";
import Bread from "./Bread";
const CustomerMenu = () => {

  return (

    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="starter" element={<Starter />} />
        <Route path="maincourse" element={<Main_Course />} />
        <Route path="bread" element={<Bread />} />
        <Route path="desserts" element={<Desserts />} />
      </Routes>

    </>

  );
}

export default CustomerMenu;