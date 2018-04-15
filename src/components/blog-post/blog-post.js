import React, { Component } from 'react';

import './index.css';

export default class BlogPost extends Component {
  render() {
    return (
      <div
        className='blog-post-container'
        onClick={() => window.open(this.props.link,'_blank')}>

        <img alt='' src={this.props.image} className='blog-post-image'/>

        <span className='blog-post-text'>
          { this.props.title }
        </span>

      </div>
    )
  }
}
