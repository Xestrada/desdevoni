import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Header from "../common/header";
import ImageBoard from '../common/imageBoard';
import PageNav from '../common/pageNav';

import img1 from '../../images/portfolio/1.jpg';
import img2 from '../../images/portfolio/2.jpg';
import img3 from '../../images/portfolio/3.jpg';
import img4 from '../../images/portfolio/4.jpg';
import img5 from '../../images/portfolio/5.jpg';
import img6 from '../../images/portfolio/6.jpg';
import img7 from '../../images/portfolio/7.jpg';
import img8 from '../../images/portfolio/8.jpg';
import img9 from '../../images/portfolio/9.jpg';
import img10 from '../../images/portfolio/10.jpg';
import img11 from '../../images/portfolio/11.jpg';
import img12 from '../../images/portfolio/12.jpg';
import img13 from '../../images/portfolio/13.jpg';
import img14 from '../../images/portfolio/14.jpg';
import img15 from '../../images/portfolio/15.jpg';
import img16 from '../../images/portfolio/16.jpg';
import img17 from '../../images/portfolio/17.jpg';
import img18 from '../../images/portfolio/18.jpg';
import img19 from '../../images/portfolio/19.jpg';
import img20 from '../../images/portfolio/20.jpg';
import img21 from '../../images/portfolio/21.jpg';
import img22 from '../../images/portfolio/22.jpg';
import img23 from '../../images/portfolio/23.jpg';
import img24 from '../../images/portfolio/24.jpg';
import img25 from '../../images/portfolio/25.jpg';
import img26 from '../../images/portfolio/26.jpg';
import img27 from '../../images/portfolio/27.jpg';


import './portfolio.scss';

export class DefaultPage extends Component {
  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="portfolio-default-page">
        <Header/>
        <div className = 'grid-container'>
          <ImageBoard image = {img1} classStyle = 'mainBoard'/>
          <PageNav classStyle = 'sideGrid' />
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
