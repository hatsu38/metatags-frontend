import React, { Component } from 'react';
import { TextField, Grid } from '@material-ui/core';
import axios from "axios";
import Google from './google'
import Facebook from './facebook'
import Twitter from './twitter'
import Metatags from './metatags'
import '../styles/content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: '',
      url: 'https://ninteiyakuzaishi.m3.com/'
    };
    this.getMetatags = this.getMetatags.bind(this)
    this.getMetatagsWithSubmit = this.getMetatagsWithSubmit.bind(this)
    this.handleChange = this.handleUrlChange.bind(this)
  }

  componentDidMount() {
    this.getMetatags()
  }

  async getMetatags() {
    const API_URL = 'https://metatags-api.herokuapp.com/api/v1/scrape'
    const response = await axios.get(API_URL, { params: {url: this.state.url }});
    this.setState({
      meta: response.data.metatags
    })
  }

  getMetatagsWithSubmit(e) {
    e.preventDefault();
    this.getMetatags()
  }

  handleUrlChange(e) {
    this.setState({url: e.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <form noValidate autoComplete="off" onSubmit={this.getMetatagsWithSubmit} >
            <TextField
              label="URL"
              type="search"
              variant="filled"
              fullWidth
              defaultValue={this.state.url}
              onChange={this.handleChange}
            />
          </form>
          <h3>Metatags</h3>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Metatags meta={this.state.meta} />
            </Grid>
            <Grid item xs={8}>
              <Google meta={this.state.meta} />
              <Facebook meta={this.state.meta} />
              <Twitter meta={this.state.meta} />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
export default Content