import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import '../styles/header.scss'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position='static' color="transparent" className='header main-color'>
          <Toolbar className='MuiTypography-alignCenter'>
            <h1 className='site-title'>メタタグチェッカー</h1>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}
export default Header