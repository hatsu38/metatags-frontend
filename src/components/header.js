import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import '../styles/header.scss'
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position='static'>
          <Toolbar className='MuiTypography-alignCenter'>
            <h1 className='site-title'>Metatag Check</h1>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}
export default Header