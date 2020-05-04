import React, { Component } from 'react';
import { Grid, Card, CardContent, CardActionArea, CardMedia } from '@material-ui/core';
import '../styles/facebook.scss';
import { BrowserRouter, Link } from 'react-router-dom'

class Facebook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="facebook">
            <h4>Facebook</h4>
            <Grid container spacing={3}>
              <Grid item xs={7} sm={7} className="pc">
                <Card className='card'>
                  <CardMedia
                    image={this.props.meta.og_image}
                    title={this.props.meta.title}
                    className='facebook-card-media'
                  />
                  <div class="card-facebook__text">
                    <span class="card-facebook__link">
                      {this.props.meta.domain}
                    </span>
                    <div class="card-facebook__content">
                      <div>
                        <div class="card-facebook__title">
                          {this.props.meta.title}
                        </div>
                      </div>
                      <span class="card-facebook__description js-preview-description">
                        {this.props.meta.description}
                      </span>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} className="sp">
                <Card className='card'>
                  <CardMedia
                    image={this.props.meta.og_image}
                    title={this.props.meta.title}
                    className='facebook-card-media'
                  />
                  <div class="card-facebook__text">
                    <span class="card-facebook__link">
                      {this.props.meta.domain}
                    </span>
                    <div class="card-facebook__content">
                      <div>
                        <div class="card-facebook__title">
                          {this.props.meta.title}
                        </div>
                      </div>
                      <span class="card-facebook__description js-preview-description">
                        {this.props.meta.description}
                      </span>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default Facebook