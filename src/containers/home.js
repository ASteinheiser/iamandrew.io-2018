import React, { Component } from 'react';

import HomeCard         from '../components/home-card';
import InteractiveStars from '../components/interactive-stars';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeCard />
        <InteractiveStars />
      </div>
    );
  }
}
