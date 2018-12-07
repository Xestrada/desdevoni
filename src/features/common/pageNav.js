import React from 'react';
import PropTypes from 'prop-types';
import './pageNav.scss';

export default class PageNav extends React.Component {

    static propTypes = {
        classStyle: PropTypes.string.isRequired
    };

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className = {`pageNav ${this.props.classStyle}`}>
        <h5>Portfolio</h5>
        <h6><a>Jacket</a></h6>
        <h6><a>Science Fiction</a></h6>
        <h6><a>Reneissance</a></h6>
      </div>
    );
  }
}
