import React, { Component } from 'react';

import './Boomerang.css';

class Boomerang extends Component {
  state = {
    images: [],
    currentIndex: 0,
    direction: 'forward'
  };

  componentDidMount() {
    this.setState({ images: this.props.images });

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
