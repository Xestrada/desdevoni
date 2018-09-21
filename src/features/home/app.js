import React, { Component } from 'react';
import Header from '../common/header';
import Home from './home';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  render() {
    return (
      <div className="home-app">
        <Header />
        <Home />
      </div>
    );
  }
}
