import React, { Component } from "react";
import "./home.css";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import BestSmartPhone from "../BestSmartphone/BestSmartPhone";
import BestLaptop from "../BestLaptop/BestLaptop";
import Promotion from "../Promotion/Promotion";

export default class Home extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <BestSmartPhone />
        <BestLaptop />
        <Promotion />
      </div>
    );
  }
}
