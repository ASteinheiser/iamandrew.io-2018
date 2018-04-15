import React from 'react';

import TopNavTab from '../top-nav-tab';
import './index.css';

export default class TopNav extends React.Component {
  render() {
    return (
      <div className='top-nav-bar'>
        <div className='max-width'>
          <TopNavTab
            text="about"
            linkTo="/about"
            history={this.props.history}
            active={this.props.currentPage === '/about'}
          />
          <TopNavTab
            text="projects"
            linkTo="/projects"
            history={this.props.history}
            active={this.props.currentPage === '/projects'}
          />
        </div>
      </div>
    )
  }
}
