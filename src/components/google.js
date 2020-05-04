import React, { Component } from 'react';
import '../styles/google.scss';
import { BrowserRouter, Link } from 'react-router-dom'

class Google extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="google">
            <h4 className="group__title"><span>Google</span></h4>
            <Link to={this.props.meta.url} className='siteTitleLink'>
              <h3 className='siteTitle'>{this.props.meta.title}</h3>
            </Link>
            <div className="google-site-url">
              <span>{this.props.meta.url}</span>
              <span className="card-seo-google__url-arrow"></span>
            </div>
            <div>{this.props.meta.description}</div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default Google