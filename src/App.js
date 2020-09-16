import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AllComponent from "./Component/AllComponent/AllComponent";
import Contact from "./Component/Contact/Contact"; //other page
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={AllComponent}/>
        <Route path='/Content' component={Contact}/>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
