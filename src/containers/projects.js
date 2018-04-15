import React, { Component } from 'react';

import Navigation from '../components/navigation';

export default class Projects extends Component {
  render() {
    return (
      <Navigation history={this.props.history}>
        {'Projects'}
      </Navigation>
    );
  }
}
