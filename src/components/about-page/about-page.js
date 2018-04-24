import React, { Component } from 'react';

import LinkText  from '../link-text';
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
            {'Email Me:'}
            <br />
            <LinkText text='me@iamandrew.io' link='mailto:me@iamandrew.io' />
            <br />
            {''}
            <br />
            {'Call Me:'}
            <br />
            {'623-208-9405'}
            <br />
            {''}
            <br />
            <LinkText text='> View Resume' link='https://iamandrew.io/Resume_2018.pdf' />
          </div>
          <div className='about-page-contact-info'>
            {'Follow Me:'}
            <br />
            <LinkText text='> Github' link='https://www.github.com/ASteinheiser' />
            <br />
            <LinkText text='> Hackster' link='https://www.hackster.io/andrewstein' />
            <br />
            <LinkText text='> LinkedIn' link='https://www.linkedin.com/in/andrew-steinheiser-8989b1122/' />
            <br />
            <LinkText text='> Facebook' link='https://www.facebook.com/andrewsteinheiser' />
            <br />
            <LinkText text='> Instagram' link='https://www.instagram.com/asteinheiser/' />
            <br />
            <LinkText text='> Twitter' link='https://twitter.com/ASteinheiser' />
          </div>
        </div>
      </div>
    )
  }
}
