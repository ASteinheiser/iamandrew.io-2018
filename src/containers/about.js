import React, { Component } from 'react';

import Navigation from '../components/navigation';
import AboutPage  from '../components/about-page';

export default class About extends Component {
  render() {
    return (
      <Navigation history={this.props.history}>
        <AboutPage />
      </Navigation>
    );
  }
}
