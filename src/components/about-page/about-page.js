import React, { Component } from 'react';

import './index.css';

export default class AboutPage extends Component {
  render() {
    return (
      <div className='about-page-container'>
        <div className='about-page-header'>
          {'Andrew Steinheiser'}
        </div>
        <div className='about-page-body'>
          {'I’m a fullstack developer, hacker, and entrepreneur. I create mobile applications, websites, and IoT devices, using React Native, React, and Node.js, respectively. I also have experience with AWS and Google Cloud. If you have any questions, feel free to reach out...'}
        </div>
      </div>
    )
  }
}
