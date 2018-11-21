import React from 'react';
import PropTypes from 'prop-types';
import './imageBoard.scss';

export default class ImageBoard extends React.Component{

    static propTypes = {
        firstImage: PropTypes.object.isRequired,
        secondImage: PropTypes.object.isRequired,
        thirdImage: PropTypes.object.isRequired,
        fourthImage: PropTypes.object.isRequired,
        layout: PropTypes.object.isRequired
    };

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className = "board">
        <div className = "imgHolder">
            <img src={this.props.firstImage} alt="first_image" className='imgOne' />
            <img src={this.props.secondImage} alt="second_image" className='imgTwo' />
            <img src={this.props.thirdImage} alt="third_image" className='imgThree' />
            <img src={this.props.fourthImage} alt="fourth_image" className='imgFour' />
        </div>
      </div>
    );
  }
}
