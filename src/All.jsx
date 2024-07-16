import React from "react";
import HomePage from "./components/Layout/HomePage";
import Choices_Based from "./components/Choices-Based/Choices-Based";
import Flagship from "./components/Flagship/Flagship";
import Popular from "./components/Popular/Popular";
import ArtisticFurniture from './components/Artistic Furniture/ArtisticFurniture'
// import LatestFurniture from './components/Latest/LatestFurniture'

const All = () => {
  return (
    <div>
      <HomePage />
      <Choices_Based />
      <Flagship />
      <Popular />
      <ArtisticFurniture />
      {/* <LatestFurniture /> */}

    </div>
  );
};

export default All;
