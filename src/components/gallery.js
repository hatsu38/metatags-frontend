import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
      metas: [],
      page: 1
    }
    this.getMetatags = this.getMetatags.bind(this)
  }
  componentDidMount() {
    this.getMetatags()
  }
  async getMetatags() {
    const API_URL = `https://metatags-api.herokuapp.com/api/v1/metatags?page=${this.state.page}`
    const response = await axios.get(API_URL);
    this.setState({ metas: this.state.metas.concat(response.data.metatags) })
    this.setState({ page: this.state.page+1 })
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
          <div class='button-group'>
            <Button variant="contained" className="moreReadButton main-color" onClick={this.getMetatags}>
              もっと見る
            </Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Gallery