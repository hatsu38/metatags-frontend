import React, { Component } from 'react';
import { TextField, Grid } from '@material-ui/core';
import axios from "axios";
import Google from './google'
import Facebook from './facebook'
import Twitter from './twitter'
import Metatags from './metatags'
import Tagcode from './tagcode'
import '../styles/content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: '',
      title: '',
      description: '',
      image: '',
      url: 'https://www.producthunt.com/'
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
    this.setState({
      title: response.data.metatags.title
    })
    this.setState({
      description: response.data.metatags.description
    })
    this.setState({
      image: response.data.metatags.og_image
    })
  }

  getMetatagsWithSubmit(e) {
    e.preventDefault();
    this.getMetatags()
  }

  handleUrlChange(e) {
    this.setState({url: e.target.value})
  }

  handleChangeTitle(value) {
    this.setState({title: value });
  }
  handleChangeDescription(value) {
    this.setState({description: value });
  }
  handleChangeImage(value) {
    this.setState({image: value });
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <form noValidate autoComplete="off" onSubmit={this.getMetatagsWithSubmit} >
            <TextField
              label="URL"
              type="url"
              variant="filled"
              fullWidth
              defaultValue={this.state.url}
              onChange={this.handleChange}
            />
          </form>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <h3 className='grid-title'>Metatags</h3>
              <Metatags
              meta={this.state.meta}
              title={this.state.title}
              description={this.state.description}
              image={this.state.image}
              handleChangeTitle={(value) => { this.handleChangeTitle(value); }}
              handleChangeDescription={(value) => { this.handleChangeDescription(value); }}
              handleChangeImage={(value) => { this.handleChangeImage(value); }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <h3 className='grid-title'>Preview</h3>
              <Tagcode
                meta={this.state.meta}
                title={this.state.title}
                description={this.state.description}
                image={this.state.image}
              />
              <Google
                meta={this.state.meta}
                title={this.state.title}
                description={this.state.description}
                image={this.state.image}
              />
              <Facebook
                meta={this.state.meta}
                title={this.state.title}
                description={this.state.description}
                image={this.state.image}
              />
              <Twitter
                meta={this.state.meta}
                title={this.state.title}
                description={this.state.description}
                image={this.state.image}
              />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
export default Content