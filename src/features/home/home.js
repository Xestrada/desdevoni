import React, { Component } from 'react';
import Header from '../common/header';
import mainImage from './images/back.jpg';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className = "home-root">
        <Header />
        <div className = "main">
          <img src = {mainImage} alt = "Main BAck Image" />
        </div>
      </div>

    );
  }
}

export default Home;
