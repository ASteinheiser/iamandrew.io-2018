import React, { Component } from 'react';

import './index.css';

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className='projects-page-container'>
        <div className='projects-page-header'>
          {'projects'}
        </div>
        <div className='projects-page-body'>
          {'Web Programming/Design'}
          <br />
          {'Microservices/Servers'}
          <br />
          {'Internet of Things'}
          <br />
          {'Tutorials/Guides'}
        </div>
      </div>
    )
  }
}
