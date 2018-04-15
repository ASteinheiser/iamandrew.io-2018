import React from 'react';

import './index.css';

export default class TopNav extends React.Component {
  render() {
    return (
      <div className='top-nav-bar'>
        <div className='space-between max-width'>
          <div>
            {'iamandrew'}
          </div>
          <div className='top-nav-links-container'>
            <div onClick={() => this.props.history.push('/about')} className='top-nav-item'>
              {'about'}
            </div>
            <div onClick={() => this.props.history.push('/projects')} className='top-nav-item'>
              {'projects'}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
