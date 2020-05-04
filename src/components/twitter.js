import React, { Component } from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'
import '../styles/twitter.scss';

class Twitter extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="twitter">
            <h4 className="group__title"><span>Twitter</span></h4>
            <Card className='card'>
              <div class="card-twitter">
                <CardMedia
                  image={this.props.meta.og_image}
                  title={this.props.meta.title}
                  className='card-twitter__image'
                />
                <div class="card-twitter__text">
                  <span class="card-twitter__title">
                    {this.props.meta.title}
                  </span>
                  <span class="card-twitter__description">
                    {this.props.meta.description}
                  </span>
                  <span class="card-twitter__domain">
                  {this.props.meta.domain}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default Twitter