import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import no_image from '../no_image.png';
import axios from "axios";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      metas: []
    }
  }
  componentDidMount() {
    this.getMetatags()
  }

  async getMetatags() {
    const API_URL = 'https://metatags-api.herokuapp.com/api/v1/metatags'
    const response = await axios.get(API_URL);
    this.setState({ metas: response.data.metatags })
  }

  render() {
    const metatags = this.state.metas.map((metatag) => (
      <GridListTile key={metatag.id}>
        if(metatag.og_image) {
          <img src={metatag.og_image} alt={metatag.title} />
        } else {
          <img src={no_image} alt={metatag.title} />
        }
        <GridListTileBar
          title={metatag.title}
          subtitle={<span>description: {metatag.description}</span>}
        />
      </GridListTile>
    ));

    return (
      <React.Fragment>
        <div className='gallery'>
          <GridList className='gallery-image' cols={3} cellHeight={200} spacing={3}>
            {metatags}
          </GridList>
        </div>
      </React.Fragment>
    )
  }
}

export default Gallery