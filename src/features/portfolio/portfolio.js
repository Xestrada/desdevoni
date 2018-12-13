import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from "../common/header";
import ImageBoard from '../common/imageBoard';
import PageNav from '../common/pageNav';
import * as actions from './redux/actions';
import { 
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

// Images used in portfolio
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

import { FESTIVE_FALL,
  SEQUIN_DJ,
  REMNANT,
  BRATZ_EW,
  HADES,
  SLOW,
  SCIENCE,
  LEAF,
  AUTUMN
} from './portfolioConstants';
import './portfolio.scss';

const festiveFall = [
  {
    src: img1,
    alt: "img1",
  },
  {
    src: img2,
    alt: "img2",
  },
  {
    src: img3,
    alt: "img3",
  },
];

const sequinDJ = [
  {
    src: img4,
    alt: "img4",
  }
];

const bratz = [
  {
    src: img5,
    alt: "img5",
  },
  {
    src: img6,
    alt: "img6",
  },
  {
    src: img7,
    alt: "img7",
  },
  {
    src: img8,
    alt: "img8",
  },
  {
    src: img9,
    alt: "img9",
  },
  {
    src: img10,
    alt: "img10",
  },
  {
    src: img11,
    alt: "img11",
  }
];

const remnant = [
  {
    src: img12,
    alt: "img12",
  }
];

const hades = [
  {
    src: img13,
    alt: "img13",
  },
  {
    src: img14,
    alt: "img14",
  },
  {
    src: img15,
    alt: "img15",
  },
  {
    src: img16,
    alt: "img16",
  },
];

const slow = [
  {
    src: img17,
    alt: "img17",
  }
];

const science = [
  {
    src: img18,
    alt: "img18",
  },
  {
    src: img19,
    alt: "img19",
  },
  {
    src: img20,
    alt: "img20",
  },
];

const leaf = [
  {
    src: img21,
    alt: "img21",
  }
];

const autumn = [
  {
    src: img22,
    alt: "img22",
  },
  {
    src: img23,
    alt: "img23",
  },
  {
    src: img24,
    alt: "img24",
  },
  {
    src: img25,
    alt: "img25",
  },
  {
    src: img26,
    alt: "img26",
  },
  {
    src: img27,
    alt: "img27",
  },
];

export class DefaultPage extends Component {

  static propTypes = {
    portfolio: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { 
      activeIndex: 0,
      dropdownOpen: false
    };

    this.changeActive = this.changeActive.bind(this);
    this.toggle = this.toggle.bind(this);
    

  }

  changeActive(index) {
    this.setState({
      activeIndex: index
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let dropUpLabel;
    
    switch(this.state.activeIndex){
      case 0:
        dropUpLabel = FESTIVE_FALL;
        break;
      case 1:
        dropUpLabel = SEQUIN_DJ;
        break;
      case 2:
        dropUpLabel = BRATZ_EW;
        break;
      case 3:
        dropUpLabel = REMNANT;
        break;
      case 4:
        dropUpLabel = HADES;
        break;
      case 5:
        dropUpLabel = SLOW;
        break;
      case 6:
        dropUpLabel = SCIENCE;
        break;
      case 7:
        dropUpLabel = LEAF;
        break;
      case 8:
        dropUpLabel = AUTUMN;
        break;
    };

    return (
      <div className="portfolio-default-page">
        <Header/>
        <div className = 'grid-container'>
          <ImageBoard images = {festiveFall} className = {`mainBoard imgCarousel ${this.state.activeIndex == 0 ? `active` : ``} `} />
          <ImageBoard images = {sequinDJ} className = {`mainBoard imgCarousel ${this.state.activeIndex == 1 ? `active` : ``} `} />
          <ImageBoard images = {bratz} className = {`mainBoard imgCarousel ${this.state.activeIndex == 2 ? `active` : ``} `}/>
          <ImageBoard images = {remnant} className = {`mainBoard imgCarousel ${this.state.activeIndex == 3 ? `active` : ``} `} />
          <ImageBoard images = {hades} className = {`mainBoard imgCarousel ${this.state.activeIndex == 4 ? `active` : ``} `} />
          <ImageBoard images = {slow} className = {`mainBoard imgCarousel ${this.state.activeIndex == 5 ? `active` : ``} `} />
          <ImageBoard images = {science} className = {`mainBoard imgCarousel ${this.state.activeIndex == 6 ? `active` : ``} `} />
          <ImageBoard images = {leaf} className = {`mainBoard imgCarousel ${this.state.activeIndex == 7 ? `active` : ``} `} />
          <ImageBoard images = {autumn} className = {`mainBoard imgCarousel ${this.state.activeIndex == 8 ? `active` : ``} `} />
          {/* PageNav is for desktop */}
          <PageNav className = 'sideGrid' onClick = {this.changeActive} />
        </div>
        <div className = "mobilePageNav" >
            <ButtonDropdown direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggle} className = "mobileBtn">
              <DropdownToggle caret color = "">
                {dropUpLabel}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick = {() => this.changeActive(0)} >{FESTIVE_FALL}</DropdownItem>
                <DropdownItem onClick = {() => this.changeActive(1)} >{SEQUIN_DJ}</DropdownItem>
                <DropdownItem onClick = {() => this.changeActive(2)} >{BRATZ_EW}</DropdownItem>
                <DropdownItem onClick = {() => this.changeActive(3)} >{REMNANT}</DropdownItem>
                <DropdownItem onClick = {() => this.changeActive(4)} >{HADES}</DropdownItem>
                <DropdownItem onClick = {() => this.changeActive(5)} >{SLOW}</DropdownItem>
                <DropdownItem onClick = {() => this.changeActive(6)} >{SCIENCE}</DropdownItem>
                <DropdownItem onClick = {() => this.changeActive(7)} >{LEAF}</DropdownItem>
                <DropdownItem onClick = {() => this.changeActive(8)} >{AUTUMN}</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
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
