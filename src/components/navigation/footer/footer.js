import React from 'react';

import './index.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='max-width'>
          {'site created by Andrew Steinheiser, 2018'}
        </div>
      </div>
    )
  }
}
