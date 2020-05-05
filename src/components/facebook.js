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
                  image={this.props.image}
                  title={this.props.title}
                  className='facebook-card-media'
                />
                <div className="card-facebook__text">
                  <span className="card-facebook__link">
                    {this.props.meta.domain}
                  </span>
                  <div className="card-facebook__content">
                    <div>
                      <div className="card-facebook__title">
                        {this.props.title}
                      </div>
                    </div>
                    <span className="card-facebook__description js-preview-description">
                      {this.props.description}
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