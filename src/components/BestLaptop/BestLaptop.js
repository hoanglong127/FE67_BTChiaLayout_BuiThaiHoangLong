import React, { Component } from "react";
import "./bestlaptop.css";
import Product from "../Product/Product";

export default class BestLaptop extends Component {
  render() {
    return (
      <section
        id="laptop"
        className="container-fluid pt-5 pb-5 bg-light text-dark"
      >
        <h1 className="text-center">BEST LAPTOP</h1>
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
