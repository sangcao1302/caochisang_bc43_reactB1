import React, { Component } from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Product from "./Product";
import Footer from "./Footer";
export default class Main extends Component {
  render() {
    return <div>
        <Header/>
        <Carousel/>
        <Product/>
        <Footer></Footer>
    </div>
    
  }
}
