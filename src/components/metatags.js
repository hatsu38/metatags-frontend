// import React, { Component, useCallback } from 'react';
import React, {Component, useEffect, useState} from 'react';
import { TextField, Chip, CardMedia } from '@material-ui/core';
import {useDropzone} from 'react-dropzone'
import '../styles/metatags.scss';


class Metatags extends Component {
  render() {
    const keywordsAry = String(this.props.meta.keywords).split(',')
    const keywords = keywordsAry.map((keyword,index) =>
      <Chip label={keyword} className='meta-group__chip' />
    );
    function Previews(props) {
      const [files, setFiles] = useState([]);
      const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }
      });
      const thumbs = files.map(file => (
        <div>
          <div>
            <img src={file.preview}　class="meta-group-card__media" />
          </div>
        </div>
      ));
      useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
      }, [files]);
      return (
        <section className="container">
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag & Drop or Click</p>
          </div>
          <aside>
            {thumbs}
          </aside>
        </section>
      );
    }
    return (
      <React.Fragment>
        <h4>Image</h4>
        <div className='meta-group-card__media_block'>
        <Previews />
        <CardMedia
          image={this.props.meta.og_image}
          title={this.props.meta.title}
          className='meta-group-card__media'
        />
        </div>
      <h4 className='meta-group__title'>
        Title
        <span class="metadata-title__count">{String(this.props.meta.title).length}</span>
      </h4>
      <TextField
        multiline
        fullWidth
        rows={2}
        defaultValue={this.props.meta.title}
        variant="filled"
        className='metadata__textarea'
      />
      <h4 className='meta-group__title'>
        Description
        <span class='metadata-title__count'>
          {String(this.props.meta.description).length}
        </span>
      </h4>
      <TextField
        multiline
        fullWidth
        rows={4}
        defaultValue={this.props.meta.description}
        variant="filled"
        className='metadata__textarea'
      />
      <h4 className='meta-group__title'>
        Keywords
        <span class='metadata-title__count'>
          {keywordsAry != 'null' && keywordsAry.length}
        </span>
      </h4>
      {keywordsAry != 'null' && keywords}
      </React.Fragment>
    )
  }
}
export default Metatags