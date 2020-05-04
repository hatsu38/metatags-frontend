import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import axios from "axios";
import Google from './google'
import Facebook from './facebook'
import '../styles/content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: '',
      url: 'https://material-ui.com/api/card/'
    };
    this.getMetatags = this.getMetatags.bind(this)
    this.handleChange = this.handleUrlChange.bind(this)
  }

  componentDidMount() {
    this.getMetatags()
  }

  async getMetatags() {
    // e.preventDefault();
    const API_URL = 'https://metatags-api.herokuapp.com/api/v1/scrape'
    const response = await axios.get(API_URL, { params: {url: this.state.url }});
    this.setState({
      meta: response.data.metatags
    })
  }

  handleUrlChange(e) {
    this.setState({url: e.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <form noValidate autoComplete="off" onSubmit={this.getMetatags} >
            <TextField id="filled-search" label="URL" type="search" variant="filled" fullWidth onChange={this.handleChange} />
          </form>
          <Google meta={this.state.meta} />
          <Facebook meta={this.state.meta} />
        </div>
      </React.Fragment>
    )
  }
}
export default Content