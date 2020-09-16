import React, { Component } from 'react';
import About from './../About/About';
import Footer from './../Footer/Footer';
import Home from './../Home/Home';
import Portfolio from './../Portfolio/Portfolio';
import Profile from './../Profile/Profile';
import SocailMedia from './../SocailMedia/SocailMedia';
import Work from './../Work/Work';

class AllComponent extends Component {
  render(){

    return (
      <div>
<Home />
<Work />
<Portfolio />
<Profile />
<About />
<SocailMedia />
{/*<Footer />*/}
      </div>
      )
    }
}

export default AllComponent;
