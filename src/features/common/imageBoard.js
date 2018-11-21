import React from 'react';
import './imageBoard.scss';
import logo from '../../images/logo.png';

export default class ImageBoard extends React.Component{

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className = "board">
        <img src={logo} alt="DesDevoni" className='logo' />
        <img src={logo} alt="DesDevoni" className='logo' />
        <img src={logo} alt="DesDevoni" className='logo' />
        <img src={logo} alt="DesDevoni" className='logo' />

      </div>
    );
  }
}
