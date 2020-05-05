// import React, { Component, useCallback } from 'react';
import React, {Component, useEffect, useState} from 'react';
import { TextField, Chip } from '@material-ui/core';
import {useDropzone} from 'react-dropzone'

class Previews extends Component {

  render() {
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
        <Previews />
      </React.Fragment>
    )
  }
}
export default Previews