import React from 'react';

import Drawer from '../drawer';
import './index.css';

export default class TopNav extends React.Component {
  render() {
    return (
      <div className='top-nav-bar'>
        {
          this.props.width <= 600 ?
            <Drawer history={this.props.history} />
            :
            <div className='space-between max-width'>
              <div onClick={() => this.props.history.push('/')} className='top-nav-iamandrew-logo'>
                {'iamandrew'}
              </div>
              <div className='top-nav-links-container'>
                <div onClick={() => this.props.history.push('/projects')} className='top-nav-item margin-right'>
                  {'projects'}
                </div>
                <div onClick={() => this.props.history.push('/about')} className='top-nav-item'>
                  {'about'}
                </div>
              </div>
            </div>
        }
      </div>
    )
  }
}
