import React, { Component } from 'react';
import Header from '../common/header';
import about from "./images/about.JPG";
import './about.scss';

class About extends Component {


  render() {
    return (
      <div className="about-root">
        <Header/>
        <div className="about-box">
          <div className="img-box">
            <img src={about} alt = "About Image"/>
          </div>
          <p>Des Devoni uses sustainable practices to help reduce the carbon footprint that the fashion industry leaves.
            By using remnent textiles we can create unique and one of a kind items that you wont get anywhere else.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
