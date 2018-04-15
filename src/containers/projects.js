import React, { Component } from 'react';

import ProjectsPage from '../components/projects-page';
import Navigation   from '../components/navigation';

export default class Projects extends Component {
  render() {
    return (
      <Navigation history={this.props.history}>
        <ProjectsPage />
      </Navigation>
    );
  }
}
