import React from 'react';

import './index.css';

export default class TopNavTab extends React.Component {
  render() {
    let navItemStyle = 'top-nav-item';
    if(this.props.active) navItemStyle += ' active';

    return (
      <div onClick={() => this.props.history.push(this.props.linkTo)} className={navItemStyle}>
        {this.props.text}
      </div>
    )
  }
}
