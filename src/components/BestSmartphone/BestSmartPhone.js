import React, { Component } from "react";
import "./bestsmartphone.css";
import Product from "../Product/Product";

export default class BestSmartPhone extends Component {
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    );
  }
}
