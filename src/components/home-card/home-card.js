import React, { Component } from 'react';

import './index.css';

export default class HomeCard extends Component {
  render() {
    return (
      <div className='home-card-container'>
        <div className='home-card-title'>
          {'iamandrew'}
        </div>
        <div className='home-card-link display-inline'
          onClick={() => this.props.history.push('/projects')}>
          {'> projects'}
        </div>
        <div className='home-card-link margin-top'
          onClick={() => this.props.history.push('/about')}>
          {'> about'}
        </div>
      </div>
    )
  }
}
