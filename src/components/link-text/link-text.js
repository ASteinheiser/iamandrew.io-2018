import React, { Component } from 'react';

import './index.css';

export default class LinkText extends Component {
  render() {
    return (
      <span
        className='link-text'
        onClick={() => window.open(this.props.link,'_blank')}>

        { this.props.text }

      </span>
    )
  }
}
