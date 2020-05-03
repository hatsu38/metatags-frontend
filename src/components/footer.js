import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { BrowserRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default Header