import React, { Component } from 'react';
import Header from '../common/header';
import './about.scss';


class About extends Component {


  render() {
    return (
      <div className="about-root">
        <Header/>
        <div className="about-box">
         <img src='../image/about.JPG'></img>
          <p>Des Devoni uses sustainable practices to help reduce the carbon footprint that the fashion industry leaves.
            By using remnent textiles we can create unique and one of a kind items that you wont get anywhere else.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
