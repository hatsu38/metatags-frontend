import React, { Component } from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import '../styles/google.scss';
import { BrowserRouter, Link } from 'react-router-dom'

class Google extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="google">
            <h4>Google</h4>
            <Grid container spacing={3}>
              <Grid item xs={7} sm={7} className="pc">
                <Link to={this.props.meta.url} className='siteTitleLink'>
                  <h3 className='siteTitle'>{this.props.meta.title}</h3>
                </Link>
                <div className="google-site-url">
                  <span>{this.props.meta.url}</span>
                  <span className="card-seo-google__url-arrow"></span>
                </div>
                <div>{this.props.meta.description}</div>
              </Grid>
              <Grid item xs={5} sm={5} className="sp">
                <Card>
                  <CardContent>
                    <Link to={this.props.meta.url} className='siteTitleLink'>
                      <h3 className='siteTitle'>{this.props.meta.title}</h3>
                    </Link>
                    <div className="google-site-url">
                      <span>{this.props.meta.url}</span>
                      <span className="card-seo-google__url-arrow"></span>
                    </div>
                    <div>{this.props.meta.description}</div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default Google