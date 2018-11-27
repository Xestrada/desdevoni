import React from 'react';
import PropTypes from 'prop-types';
import './pageNav.scss';

export default class PageNav extends React.Component {

    static propTypes = {
        firstImage: PropTypes.string.isRequired,
        secondImage: PropTypes.string.isRequired,
        thirdImage: PropTypes.string.isRequired,
        fourthImage: PropTypes.string.isRequired,
        layout: PropTypes.string.isRequired
    };

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className = "pageNav">
        <h5>Portfolio</h5>
        <a>Jacket</a>
        <a>Science Fiction</a>
        <a>Reneissance</a>
      </div>
    );
  }
}
