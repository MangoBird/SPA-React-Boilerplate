import React from 'react';
import { Carousel as LibCarousel } from 'react-responsive-carousel';

import './Carousel.scss';

interface CarouselState {
  selectedSlide: number;
}

const NUM_SLIDES = 4;
const SLIDE_INTERVAL = 3000000;

export default class Carousel extends React.Component<any, CarouselState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedSlide: 0
    };
  }

  private carouselInterval: any;

  public componentDidMount() {
    this.carouselInterval = setInterval(() => {
      if (this.state.selectedSlide < NUM_SLIDES - 1) {
        this.setState(prevState => ({
          selectedSlide: prevState.selectedSlide + 1
        }));
      } else {
        this.setState({
          selectedSlide: 0
        });
      }
    }, SLIDE_INTERVAL);
  }

  private slideRight = () => {
    clearInterval(this.carouselInterval);
    if (this.state.selectedSlide < NUM_SLIDES - 1) {
      this.setState(prevState => ({
        selectedSlide: prevState.selectedSlide + 1
      }));
    } else {
      this.setState({
        selectedSlide: 0
      });
    }

    this.carouselInterval = setInterval(() => {
      if (this.state.selectedSlide < NUM_SLIDES - 1) {
        this.setState(prevState => ({
          selectedSlide: prevState.selectedSlide + 1
        }));
      } else {
        this.setState({
          selectedSlide: 0
        });
      }
    }, SLIDE_INTERVAL);
  };

  private slideLeft = () => {
    clearInterval(this.carouselInterval);

    if (this.state.selectedSlide > 0) {
      this.setState(prevState => ({
        selectedSlide: prevState.selectedSlide - 1
      }));
    } else {
      this.setState({
        selectedSlide: NUM_SLIDES
      });
    }

    this.carouselInterval = setInterval(() => {
      if (this.state.selectedSlide < NUM_SLIDES - 1) {
        this.setState(prevState => ({
          selectedSlide: prevState.selectedSlide + 1
        }));
      } else {
        this.setState({
          selectedSlide: 0
        });
      }
    }, SLIDE_INTERVAL);
  };

  public render() {
    return (
      <div className="carousel_container">
        <div className="prev_button" onClick={this.slideLeft}>
          <div className="arrow_left" />
        </div>
        <LibCarousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          // autoPlay={true}
          // interval={3000}
          emulateTouch={true}
          selectedItem={this.state.selectedSlide}
          dynamicHeight={true}
          // centerMode={true}
        >
          {this.props.children}
        </LibCarousel>
        <div className="next_button" onClick={this.slideRight}>
          <div className="arrow_right" />
        </div>
      </div>
    );
  }
}
