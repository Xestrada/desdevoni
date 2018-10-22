import React, { Component } from 'react';
import Header from '../common/header';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className = "home-root">
        <Header />
        <div className = "main">
          <h1>
            Des Devoni
          </h1>
        </div>
      </div>

    );
  }
}

export default Home;
