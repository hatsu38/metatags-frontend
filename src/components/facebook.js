import React, { Component } from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'
import '../styles/facebook.scss';

class Facebook extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="facebook">
          <h4 className="group__title"><span>Facebook</span></h4>
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
          </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default Facebook