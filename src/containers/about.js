import React, { Component } from 'react';

import Navigation from '../components/navigation';

export default class About extends Component {
  render() {
    return (
      <Navigation history={this.props.history}>
        {'About'}
      </Navigation>
    );
  }
}
