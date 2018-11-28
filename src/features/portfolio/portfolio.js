import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Header from "../common/header";
import ImageBoard from '../common/imageBoard';
import PageNav from '../common/pageNav';
import jack1 from '../../images/portfolio/jacket_3.jpg';
import jack2 from '../../images/portfolio/jacket_1.jpg';
import jack3 from '../../images/portfolio/jacket_2.jpg';
import jack4 from '../../images/portfolio/jacket_4.jpg';
import './portfolio.scss';

export class DefaultPage extends Component {
  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    var styles = {
        'grid-row': 2,
    };
    return (
      <div className="portfolio-default-page">
        <Header/>
        <div className = 'grid-container'>
          <ImageBoard firstImage = {jack1} secondImage = {jack2} thirdImage = {jack3} fourthImage = {jack4} classStyle = 'mainBoard row1'/>
          {/* <ImageBoard firstImage = {jack1} secondImage = {jack2} thirdImage = {jack3} fourthImage = {jack4} classStyle = 'mainBoard row2'/> */}
          <PageNav className = 'sideNav' classStyle = 'sideGrid' />
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    portfolio: state.portfolio,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
