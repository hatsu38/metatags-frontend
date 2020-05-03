import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter, Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <AppBar position='static'>
            <Toolbar>
              <Typography type='title'>
                <Link to="/">メタタグ</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default Header