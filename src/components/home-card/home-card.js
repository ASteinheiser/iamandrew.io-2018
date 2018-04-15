import React, { Component } from 'react';

import './index.css';

export default class HomeCard extends Component {
  render() {
    return (
      <div className='home-card-container'>
        <div className='home-card-title'>
          iamandrew
        </div>
        <div className='home-card-link margin-bottom'>
          > projects
        </div>
        <div className='home-card-link'>
          > about
        </div>
      </div>
    )
  }
}
