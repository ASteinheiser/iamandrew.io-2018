import React, { Component } from 'react';

import TopNav from './top-nav';
import './index.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className='mac-background'>

        <TopNav history={this.props.history} currentPage={window.location.pathname}/>

        <div className='navigation-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
