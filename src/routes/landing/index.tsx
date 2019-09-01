import { AppBar, Button, Container, Typography } from '@material-ui/core';
import _ from 'lodash';
import React, { Children, useRef } from 'react';
import { connect } from 'react-redux';
import { saveActivityLog } from '../../common/utils';
import './Landing.scss';
import { TrackedSection } from './TrackedSection';
const slide1 = require('../../../assets/img/slide1-min.png');
const slide2 = require('../../../assets/img/slide2-min.png');
const slide3 = require('../../../assets/img/slide3-min.png');
const slide4 = require('../../../assets/img/slide4-min.png');
const slide5 = require('../../../assets/img/slide5-min.png');
const slide6 = require('../../../assets/img/slide6-min.png');
const slide7 = require('../../../assets/img/slide7-min.png');
const slide8 = require('../../../assets/img/slide8-min.png');
const slide9 = require('../../../assets/img/slide9-min.png');
const slide10 = require('../../../assets/img/slide10-min.png');
const slide11 = require('../../../assets/img/slide11-min.png');
const slide12 = require('../../../assets/img/slide12-min.png');
const slide13 = require('../../../assets/img/slide13-min.png');
const slide14 = require('../../../assets/img/slide14-min.png');

// interface LandingProps {}

// interface LandingState {}

class Landing extends React.Component {
  public render() {
    return (
      <div id="landing-wrap">
        <TrackedSection id="slide1" logDiv={3}>
          <Container>
            <img className="slide" src={slide1} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide2" logDiv={3}>
          <Container>
            <img className="slide" src={slide2} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide3" logDiv={3}>
          <Container>
            <img className="slide" src={slide3} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide4" logDiv={3}>
          <Container>
            <img className="slide" src={slide4} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide5" logDiv={3}>
          <Container>
            <img className="slide" src={slide5} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide6" logDiv={3}>
          <Container>
            <img className="slide" src={slide6} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide7" logDiv={3}>
          <Container>
            <img className="slide" src={slide7} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide8" logDiv={3}>
          <Container>
            <img className="slide" src={slide8} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide9" logDiv={3}>
          <Container>
            <img className="slide" src={slide9} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide10" logDiv={3}>
          <Container>
            <img className="slide" src={slide10} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide11" logDiv={3}>
          <Container>
            <img className="slide" src={slide11} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide12" logDiv={3}>
          <Container>
            <img className="slide" src={slide12} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide13" logDiv={3}>
          <Container>
            <img className="slide" src={slide13} />
          </Container>
        </TrackedSection>
        <TrackedSection id="slide14" logDiv={3}>
          <Container>
            <img className="slide" src={slide14} />
          </Container>
        </TrackedSection>
        <AppBar className="bottom_nav">
          <div className="bottom_nav_area">
            <Typography variant="h5" style={{ color: 'black' }}>
              {`포트폴리오 앱을 확인하세요!`}
            </Typography>
            <a
              onClick={async () => {
                await saveActivityLog({
                  compId: 'portfolio-button',
                  type: 'SCROLL',
                  data: {},
                  createdAt: Date.now()
                });
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="buying_btn"
              href="https://apps.apple.com/kr/app/%EB%A7%88%EB%94%94-mardi-%EC%98%A4%EB%8A%98%EC%9D%84-%EB%8B%B4%EB%8A%94-%EB%AA%A9%EC%86%8C%EB%A6%AC-%EC%8A%A4%EB%83%85%EC%83%B7/id1435152474"
            >
              <Button variant="outlined">앱 확인하기</Button>
            </a>
          </div>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
