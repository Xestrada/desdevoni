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
      selected: 0
    };

    this.selectClick = this.selectClick.bind(this);
  }

  selectClick(value){
    this.setState({
      selected: value
    }, () => {
      this.props.onClick(value);
    });
  }

  render() {
    return (
      <div className = {`pageNav ${this.props.className}`}>
        <h4>Portfolio</h4>
        <h6 onClick = {() => this.selectClick(0)} className = {this.state.selected == 0 ? 'selected' : ''} >
          Festive Fall
        </h6>
        <h6 onClick = {() => this.selectClick(1)} className = {this.state.selected == 1 ? 'selected' : ''} >
          Sequin Drip Jacket
        </h6>
        <h6 onClick = {() => this.selectClick(2)} className = {this.state.selected == 2 ? 'selected' : ''} >
          Bratz Evening Wear
        </h6>
        <h6 onClick = {() => this.selectClick(3)} className = {this.state.selected == 3 ? 'selected' : ''} >
          Remnant Fabric Collection In Process
        </h6>
        <h6 onClick = {() => this.selectClick(4)} className = {this.state.selected == 4 ? 'selected' : ''} >
          Costume Designer: Hades and Persephone
        </h6>
        <h6 onClick = {() => this.selectClick(5)} className = {this.state.selected == 5 ? 'selected' : ''} >
          Slow Fashion In Process
        </h6>
        <h6 onClick = {() => this.selectClick(6)} className = {this.state.selected == 6 ? 'selected' : ''} > 
          Science Fiction Collection
        </h6>
        <h6 onClick = {() => this.selectClick(7)} className = {this.state.selected == 7 ? 'selected' : ''} >
          Leaf Block Print
        </h6>
        <h6 onClick = {() => this.selectClick(8)} className = {this.state.selected == 8 ? 'selected' : ''} >
          Des Automne
        </h6>

      </div>
    );
  }
}
