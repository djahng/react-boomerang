import React, { Component } from 'react';

import './Boomerang.css';

import img_1 from '../images/1.jpg';
import img_2 from '../images/2.jpg';
import img_3 from '../images/3.jpg';
import img_4 from '../images/4.jpg';
import img_5 from '../images/5.jpg';
import img_6 from '../images/6.jpg';
import img_7 from '../images/7.jpg';
import img_8 from '../images/8.jpg';
import img_9 from '../images/9.jpg';
import img_10 from '../images/10.jpg';
import img_11 from '../images/11.jpg';
import img_12 from '../images/12.jpg';

class Boomerang extends Component {
  state = {
    images: [
      img_1,
      img_2,
      img_3,
      img_4,
      img_5,
      img_6,
      img_7,
      img_8,
      img_9,
      img_10,
      img_11,
      img_12
    ],
    currentIndex: 0,
    direction: 'forward'
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.nextImage();
    }, 70);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  nextImage = () => {
    const { images } = this.state;
    let { currentIndex, direction } = this.state;

    if (currentIndex < images.length-1 && direction === 'forward') {
      currentIndex++;
    } else {
      currentIndex--;
      direction = 'reverse';

      if (currentIndex === 0) {
        direction = 'forward';
      }
    }

    this.setState({ currentIndex, direction });
  }

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div className="boomerang">
        <img src={images[currentIndex]} alt="lady with umbrella" />
      </div>
    );
  }
}

export default Boomerang;
