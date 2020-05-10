// import React, { Component, useCallback } from 'react';
import React, {Component } from 'react';
import { TextField, Chip, CardMedia, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import '../styles/metatags.scss';

class Metatags extends Component {
  constructor(props){
    super(props);
    this.handleChangeFile = this.handleChangeFile.bind(this)
  }
  handleChangeFile(e) {
    const files = e.target.files;
    const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    const image_url = createObjectURL(files[0]);
    this.props.handleChangeImage(image_url);
  }
  handleChangeTitle(e) {
    return this.props.handleChangeTitle(e.target.value);
  }
  handleChangeDescription(e) {
    return this.props.handleChangeDescription(e.target.value);
  }

  render() {
    const keywordsAry = String(this.props.meta.keyword).split(',')
    const keywords = keywordsAry.map((keyword,index) =>
      <Chip label={keyword} key={index} className='meta-group__chip' />
    );
    return (
      <React.Fragment>
        <h4 className='meta-group__title'>Image</h4>
        <div className='meta-group-card__media_block'>
          <CardMedia
            image={this.props.image}
            title={this.props.title}
            className='meta-group-card__media'
          />
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            style={{ display: "none" }}
            onChange={this.handleChangeFile}
          />
          <label htmlFor="contained-button-file" className='meta-group-card__media_label'>
            <Button
              variant="contained"
              color="transparent"
              className='main-color'
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </label>
        </div>
        <h4 className='meta-group__title'>
          Title
          <span className="metadata-title__count">{String(this.props.title).length}</span>
        </h4>
        <TextField
          multiline
          fullWidth
          rows={2}
          defaultValue={this.props.title}
          variant="filled"
          className='metadata__textarea'
          onChange={(e) => { this.handleChangeTitle(e); }}
        />
        <h4 className='meta-group__title'>
          Description
          <span className='metadata-title__count'>
            {String(this.props.description).length}
          </span>
        </h4>
        <TextField
          multiline
          fullWidth
          rows={4}
          defaultValue={this.props.description}
          variant="filled"
          className='metadata__textarea'
          onChange={(e) => { this.handleChangeDescription(e); }}
        />
        <h4 className='meta-group__title'>
          Keywords
          <span className='metadata-title__count'>
            {keywordsAry[0] !== "null" && keywordsAry.length}
          </span>
        </h4>
        {keywordsAry[0] !== "null" && keywords}
      </React.Fragment>
    )
  }
}
export default Metatags