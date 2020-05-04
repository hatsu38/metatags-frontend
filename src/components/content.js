import React, { Component } from 'react';
import { TextField} from '@material-ui/core';
import axios from "axios";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: '',
      url: ''
    };
    this.getMetatags = this.getMetatags.bind(this)
    this.handleChange = this.handleUrlChange.bind(this)
  }

  async getMetatags(e) {
    e.preventDefault();
    console.log("========")
    console.log(this.state.url)
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
        <form noValidate autoComplete="off" onSubmit={this.getMetatags} >
          <TextField id="filled-search" label="URL" type="search" variant="filled" fullWidth onChange={this.handleChange} />
        </form>
        <p>{this.state.url}</p>
        <p>{this.state.meta.title}</p>
        <p>{this.state.meta.description}</p>
      </React.Fragment>
    )
  }
}
export default Content