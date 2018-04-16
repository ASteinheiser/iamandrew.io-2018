import React  from 'react';
import Drawer from 'material-ui/Drawer';

import './index.css';

export default class StyledDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    return (
      <div>
        <div onClick={this.toggleDrawer} className='top-nav-iamandrew-logo'>
          {'menu'}
        </div>

        <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer}>
          <div className='drawer-container'>
            <div className='margin-bottom drawer-title'
              onClick={() => this.props.history.push('/')}>
              {'iamandrew'}
            </div>
            <div className='drawer-item'
              onClick={() => this.props.history.push('/projects')}>
              {'> projects'}
            </div>
            <div className='drawer-item'
              onClick={() => this.props.history.push('/about')}>
              {'> about'}
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}
