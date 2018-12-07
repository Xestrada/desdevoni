import React from 'react';
import PropTypes from 'prop-types';
import './pageNav.scss';

export default class PageNav extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className = {`pageNav ${this.props.className}`}>
        <h5>Portfolio</h5>
        <h6><a onClick = {() => this.props.onClick(0)}>Festive Fall</a></h6>
        <h6><a onClick = {() => this.props.onClick(1)}>Sequin Drip Jacket</a></h6>
        <h6><a onClick = {() => this.props.onClick(2)}>Bratz Evening Wear</a></h6>
        <h6><a onClick = {() => this.props.onClick(3)}>Remnant Fabric Collection In Process</a></h6>
        <h6><a onClick = {() => this.props.onClick(4)}>Costume Designer: Hades and Persephone</a></h6>
        <h6><a onClick = {() => this.props.onClick(5)}>Slow Fashion In Process</a></h6>
        <h6><a onClick = {() => this.props.onClick(6)}>Science Fiction Collection</a></h6>
        <h6><a onClick = {() => this.props.onClick(7)}>Leaf Block Print</a></h6>
        <h6><a onClick = {() => this.props.onClick(8)}>Des Automne</a></h6>

      </div>
    );
  }
}
