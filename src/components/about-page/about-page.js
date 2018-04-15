import React, { Component } from 'react';

import './index.css';

export default class AboutPage extends Component {
  render() {
    return (
      <div className='about-page-container'>
        <div className='about-page-header'>
          {'andrew steinheiser'}
        </div>
        <div className='about-page-bio'>
          {'I’m a fullstack developer, hacker, and entrepreneur. I create mobile applications, websites, and IoT devices, using React Native, React, and Node.js, respectively. I also have experience with AWS and Google Cloud. If you have any questions, feel free to reach out...'}
        </div>
        <div className='about-page-info-container'>
          <div className='about-page-contact-info'>
            {'Call Me:'}
            <br />
            {'623-208-9405'}
            <br />
            {''}
            <br />
            {'Email Me:'}
            <br />
            {'me@iamandrew.io'}
            <br />
            {''}
            <br />
            {'View Resume'}
          </div>
          <div className='about-page-social-media'>
            {'Follow Me:'}
            <br />
            {'Github'}
            <br />
            {'Hackster'}
            <br />
            {'LinkedIn'}
            <br />
            {'Facebook'}
            <br />
            {'Instagram'}
            <br />
            {'Twitter'}
          </div>
        </div>
      </div>
    )
  }
}
