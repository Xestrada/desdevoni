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
        {/* <div className = 'grid-container'> */}
        <div >
          <h2>Festive Fall</h2>
          <ImageBoard image = {img1} />
          <ImageBoard image = {img2}/>
          <ImageBoard image = {img3}/>
          <h2>Sequin Drip Jacket</h2>
          <ImageBoard image = {img4} />
          <h2>Bratz Evening Wear</h2>
          <ImageBoard image = {img5} />
          <ImageBoard image = {img6} />
          <ImageBoard image = {img7} />
          <ImageBoard image = {img8} />
          <ImageBoard image = {img9} />
          <ImageBoard image = {img10} />
          <ImageBoard image = {img11} />
          <h2>Remnant Fabric Collection In Process</h2>
          <ImageBoard image = {img12} />
          <h2>Costume Designer: Hades and Persephone</h2>
          <ImageBoard image = {img13} />
          <ImageBoard image = {img14} />
          <ImageBoard image = {img15} />
          <ImageBoard image = {img16} />
          <h2>Slow Fashion In Process</h2>
          <ImageBoard image = {img17} />
          <h2>Science Fiction Collection</h2>
          <ImageBoard image = {img18} />
          <ImageBoard image = {img19} />
          <ImageBoard image = {img20} />
          <h2>Leaf Block Print</h2>
          <ImageBoard image = {img21} />
          <h2>Des Automne</h2>
          <ImageBoard image = {img22} />
          <ImageBoard image = {img23} />
          <ImageBoard image = {img24} />
          <ImageBoard image = {img25} />
          <ImageBoard image = {img26} />
          <ImageBoard image = {img27} />

          {/* <ImageBoard firstImage = {jack1} secondImage = {jack2} thirdImage = {jack3} fourthImage = {jack4} classStyle = 'mainBoard row2'/> */}
          {/* <PageNav className = 'sideNav' classStyle = 'sideGrid' /> */}
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
