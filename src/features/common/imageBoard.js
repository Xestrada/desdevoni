import React from 'react';
import PropTypes from 'prop-types';
import './imageBoard.scss';

export default class ImageBoard extends React.Component{

    static propTypes = {
        image: PropTypes.string.isRequired
    };

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className = {`board ${this.props.classStyle}`}>
        <div className = "imgHolder">
            <img src={this.props.image} alt="first_image" className = 'imgTemp'/>
        </div>
      </div>
    );
  }
}
