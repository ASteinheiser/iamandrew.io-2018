import React, { Component } from 'react';

import HomeCard         from '../components/home-card';
import InteractiveStars from '../components/interactive-stars';

export default class Home extends Component {
  render() {
    return (
      <div id='home'>
        <HomeCard history={this.props.history}/>
        <InteractiveStars />
      </div>
    );
  }
}
