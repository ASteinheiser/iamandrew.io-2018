import React, { Component } from 'react';

import TopNav from './top-nav';
import './index.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div className='mac-background'>
        <TopNav width={this.state.width} history={this.props.history}/>

        <div className='navigation-content max-width'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
