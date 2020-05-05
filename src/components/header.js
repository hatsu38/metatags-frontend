import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position='static'>
          <Toolbar>
            <Typography type='title'>
              メタタグ
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}
export default Header