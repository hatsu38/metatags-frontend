import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import no_image from '../no_image.png';
import axios from "axios";
import '../styles/gallery.scss';

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
    const metatagsCard = this.state.metas.map((metatag) => (
      <Grid item xs={12} sm={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              className='cardMedia'
              image={metatag.og_image ? metatag.og_image : no_image}
              title={metatag.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {metatag.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));

    return (
      <React.Fragment>
        <div className='gallery'>
          <div class="gallery-main-text">
            <h3 class="gallery-main-title">Website Meta Tags Gallery</h3>
          </div>
          <Grid container spacing={3}>
            {metatagsCard}
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default Gallery