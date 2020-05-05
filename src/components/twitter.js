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
              <div className="card-twitter">
                <CardMedia
                  image={this.props.image}
                  title={this.props.title}
                  className='card-twitter__image'
                />
                <div className="card-twitter__text">
                  <span className="card-twitter__title">
                    {this.props.title}
                  </span>
                  <span className="card-twitter__description">
                    {this.props.description}
                  </span>
                  <span className="card-twitter__domain">
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